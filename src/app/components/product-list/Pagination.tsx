// app/components/product-list/Pagination.tsx

"use client";

import styles from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.pageButton}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span className={styles.currentPage}>{currentPage}</span>
      <button
        className={styles.pageButton}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próximo
      </button>
    </div>
  );
};

export default Pagination;
