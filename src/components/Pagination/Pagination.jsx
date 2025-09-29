import React from "react";

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
  if (totalPages <= 1) return null; // لو صفحة واحدة بس مش هنعرض حاجة

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* زرار Prev */}
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* الأرقام */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === index + 1
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* زرار Next */}
      <button
        onClick={() =>
          setCurrentPage((prev) => Math.min(prev + 1, totalPages))
        }
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
