import { useEffect, useMemo, useState } from "react";
import { blogPosts as metaPosts } from "../utils/blogData";
import BlogCard from "../components/canvas/BlogCard";
import SearchBar from "../components/canvas/SearchBar";
import SkeletonCard from "../components/canvas/SkeletonCard";
import { calculateReadingTime, excerptFromMarkdown } from "../utils/calculateReadingTime";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All"); // ✅ renamed for clarity
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🧠 Fetch & enrich posts
  useEffect(() => {
    let mounted = true;
    setLoading(true);

    Promise.all(
      metaPosts.map(async (p) => {
        try {
          const res = await fetch(`/blog-data/${p.file}`);
          if (!res.ok) throw new Error("Not found");
          const text = await res.text();

          return {
            ...p,
            raw: text,
            excerpt: excerptFromMarkdown(text, 160),
            readingTime: calculateReadingTime(text),
            source: "local",
          };
        } catch (err) {
          return {
            ...p,
            raw: null,
            excerpt: p.description || "",
            readingTime: "—",
            source: "local",
          };
        }
      })
    )
      .then((enriched) => {
        if (!mounted) return;
        enriched.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(enriched);
      })
      .catch((err) => console.error("Failed to fetch blog markdowns:", err))
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => (mounted = false);
  }, []);

  // 🏷️ Compute available tags
  const tags = useMemo(() => {
    const set = new Set(["All"]);
    metaPosts.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  // 🔍 Filter logic
  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(query.toLowerCase()));
      const matchesTag = activeTag === "All" || (p.tags || []).includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [posts, query, activeTag]);

  return (
    <>
    <Navbar />
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-4 pt-32 pb-12"
      id="blog"
    >
      <header className="mb-6">
        <h1 className="text-3xl font-bold font-mova bg-gradient-to-r from-[#06AED5] to-[#067B9C] bg-clip-text text-transparent">
          Blog & Publications
        </h1>
        <p className="text-gray-400 mt-2 font-medium font-mova">
          Read and enjoy 😉
        </p>
      </header>

      {/* Search + Tag filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <SearchBar value={query} onChange={setQuery} placeholder="Search posts..." />
        <div className="flex items-center gap-2 overflow-auto">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t)} // ✅ renamed correctly
              className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                activeTag === t
                  ? "bg-[#06AED5] text-black font-medium font-mova"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 font-medium font-mova"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Content grid */}
      {loading ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 font-medium font-mova">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-12">No posts found.</p>
      )}
    </motion.div>
    </>
  );
}
