export default function SearchBar({ value, onChange }) {
    return (
      <input
        type="text"
        placeholder="Search articles..."
        className="w-full p-3 rounded-xl bg-gray-900 text-gray-200 border border-gray-700 font-medium font-mova"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  