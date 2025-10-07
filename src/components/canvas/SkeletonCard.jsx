export default function SkeletonCard() {
    return (
      <div className="animate-pulse p-5 bg-gray-800 rounded-xl max-w-3xl mx-auto mt-10">
        <div className="h-8 bg-gray-700 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-2/3"></div>
      </div>
    );
  }
  