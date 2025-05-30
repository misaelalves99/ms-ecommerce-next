// app/components/search/SearchForm.tsx
'use client';

import React, { useState } from 'react';
import styles from './SearchForm.module.css';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <div>
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={query}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
