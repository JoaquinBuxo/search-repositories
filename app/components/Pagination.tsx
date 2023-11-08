type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const maxVisiblePages = 5;
  const pagesBuffer = Math.floor(maxVisiblePages / 2);

  // calculate the first and last page to be displayed
  let startPage = Math.max(currentPage - pagesBuffer, 1);
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  // adjust the page range if it is near the start or end
  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  // create an array with numbers of the pages that will be displayed
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      {startPage !== 1 && (
        <button disabled={currentPage === 1} onClick={() => onPageChange(1)}>
          1
        </button>
      )}
      {startPage > 1 && <span>...</span>}
      {pages.map((page) => (
        <button
          key={page}
          disabled={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      {endPage < totalPages && <span>...</span>}
      {endPage !== totalPages && (
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      )}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
