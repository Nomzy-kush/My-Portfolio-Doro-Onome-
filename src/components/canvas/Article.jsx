// src/components/canvas/Article.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import ScrollProgress from "./ScrollProgress";
import { calculateReadingTime } from "../../utils/calculateReadingTime";
import { blogPosts } from "../../utils/blogData";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../Navbar";

export default function Article() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const [content, setContent] = useState("");
  const [readTimeText, setReadTimeText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!post) {
      setError("Article not found");
      setLoading(false);
      return;
    }

    let mounted = true;
    setLoading(true);
    fetch(`/blog-data/${post.file}`)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then((text) => {
        if (!mounted) return;
        setContent(text);
        setReadTimeText(calculateReadingTime(text));
      })
      .catch((err) => {
        console.error("Failed to load post:", err);
        setError("Could not load the article. Try again later.");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => (mounted = false);
  }, [post]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="loader" /></div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-400">{error}</div>;

  return (
    <>
      <Navbar />
      <ScrollProgress />
      <motion.article
        className="prose prose-lg dark:prose-invert leading-relaxed tracking-wide max-w-3xl mx-auto p-6 relative mt-[8rem]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-gray-400 text-sm mb-6 flex justify-between border-b border-gray-700 pb-2">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>{readTimeText}</span>
        </div>

        {/* NOTE: rehypeRaw is enabled here so raw HTML (like <iframe>) is parsed */}
        <div className="blog-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            // custom renderers (code + iframe) below
            components={{
              // code blocks -> syntax highlighter
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                if (!inline && match) {
                  return (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-lg shadow-sm border border-gray-800"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                }
                return (
                  <code className="bg-[#2A2A2A] text-[#FF9D00] px-1.5 py-0.5 rounded" {...props}>
                    {children}
                  </code>
                );
              },

              // iframe -> responsive wrapper
              iframe({ node, ...props }) {
                // props.src, props.title, etc.
                return (
                  <div className="w-full rounded-lg overflow-hidden shadow-sm my-6" style={{paddingBottom: '56.25%', position: 'relative'}}>
                    <iframe
                      {...props}
                      className="absolute inset-0 w-full h-full"
                      // ensure these attributes exist on the iframe in the markdown
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                );
              },

              // optional: render links to open in new tab
              a({ node, ...props }) {
                return <a {...props} target={props.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{props.children}</a>;
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </motion.article>
    </>
  );
}
