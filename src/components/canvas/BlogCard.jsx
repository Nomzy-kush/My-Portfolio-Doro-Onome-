import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMedium } from "react-icons/fa";

export default function BlogCard({ post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0b1120] rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-[#06AED5]/20 transition-all"
    >
      {/* Title & Medium icon */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold leading-snug">
          <Link
            to={`/blog/${post.slug}`} // ✅ Correct internal route
            className="hover:text-[#06AED5] transition-colors"
          >
            {post.title}
          </Link>
        </h3>
        <FaMedium className="text-[#06AED5] opacity-80" />
      </div>

      {/* Excerpt */}
      <p className="text-sm text-gray-400 mb-3 line-clamp-3">
        {post.excerpt || post.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {(post.tags || []).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-[#06AED5]/10 text-[#06AED5] rounded-full border border-[#06AED5]/20"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Meta info */}
      <div className="text-xs text-gray-500 flex justify-between items-center mt-auto">
      <span>{new Date(post.date).toLocaleDateString()}</span>
        <span>{post.readingTime || "—"}</span>
      </div>

      {/* Read more link */}
      <div className="mt-4 text-right">
        <Link
          to={`/blog/${post.slug}`}
          className="text-[#06AED5] font-medium text-sm hover:underline"
        >
          Read More →
        </Link>
      </div>
    </motion.article>
  );
}
