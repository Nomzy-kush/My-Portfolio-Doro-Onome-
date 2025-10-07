import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SkeletonCard from "./SkeletonCard";
import { motion } from "framer-motion";
import ScrollProgress from "./ScrollProgress";
import { calculateReadingTime } from "../../utils/calculateReadingTime";
import { blogPosts } from "../../utils/blogData"; // ensure this path is correct
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Article() {
    const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const [content, setContent] = useState("");
  const [readTimeText, setReadTimeText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!post) return;
  
    let mounted = true;
  
    fetch(`/blog-data/${post.file}`)
      .then((res) => res.text())
      .then((text) => {
        if (!mounted) return;
        setContent(text);
        const rt = calculateReadingTime(text);
        setReadTimeText(rt);
      })
      .catch((err) => console.error("Failed to load post:", err));
  
    return () => (mounted = false);
  }, [post]);


  return (
    <>
      <ScrollProgress />
      <motion.article
        className="prose prose-lg dark:prose-invert leading-relaxed tracking-wide max-w-3xl mx-auto p-6 relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-gray-400 text-sm mb-6 flex justify-between border-b border-gray-700 pb-2">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>{readTimeText}</span>
        </div>

        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-lg shadow-sm border border-gray-800"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-[#2A2A2A] text-[#FF9D00] px-1.5 py-0.5 rounded" {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </motion.article>
    </>
  );
}
