// app/products/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { getProducts } from '../lib/api/products';
import ProductList from '../components/product-list/ProductList';
import CategoryList from '../components/category/CategoryList';
import SearchForm from '../components/search/SearchForm';
import styles from './ProductsPage.module.css';
import { Product } from '../types/product';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = await getProducts();
        setProducts(allProducts);
        setFilteredProducts(allProducts);

        const uniqueCategories = Array.from(new Set(allProducts.map((p) => p.category)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategorySelect = (category: string) => {
    if (category === 'Todos') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Produtos</h1>

      <SearchForm onSearch={handleSearch} />
      <CategoryList
        categories={['Todos', ...categories]}
        onCategorySelect={handleCategorySelect}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}
