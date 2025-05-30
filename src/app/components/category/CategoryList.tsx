// app/components/CategoryList.tsx

'use client';

import React from 'react';
import styles from './CategoryList.module.css';

interface CategoryListProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onCategorySelect }) => {
  return (
    <div className={styles.categoryListContainer}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={styles.categoryButton}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
