const tags = ["web3", "writing", "api", "devrel"];

export default function TagFilter({ activeTag, setActiveTag }) {
  return (
    <div className="flex gap-3 mt-4 flex-wrap">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setActiveTag(activeTag === tag ? "" : tag)}
          className={`px-3 py-1 rounded-full text-sm border ${
            activeTag === tag
              ? "bg-[#06AED5] text-white"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}
