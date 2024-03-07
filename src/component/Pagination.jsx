import React from 'react';

function Pagination({ currentPage, onPageChange }) {
  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
  <button
    onClick={handlePrevClick}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded-md ${
      currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
    }`}
  >
    Previous
  </button>
  <span className="text-lg font-semibold">{currentPage}</span>
  <button
    onClick={handleNextClick}
    className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
  >
    Next
  </button>
</div>

  );
}

export default Pagination;
