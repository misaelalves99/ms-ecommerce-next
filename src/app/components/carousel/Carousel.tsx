'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';
import type { Product } from '../../types/product';
import { getProducts } from '../../lib/api/products';

const fallbackImage = '/fallback.jpg';
const PRODUCTS_PER_SLIDE = 4;

const Carousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    loadProducts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + PRODUCTS_PER_SLIDE) % products.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - PRODUCTS_PER_SLIDE + products.length) % products.length
    );
  };

  if (products.length === 0) return <div>Carregando...</div>;

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + PRODUCTS_PER_SLIDE
  );

  const displayedProducts =
    visibleProducts.length < PRODUCTS_PER_SLIDE
      ? [...visibleProducts, ...products.slice(0, PRODUCTS_PER_SLIDE - visibleProducts.length)]
      : visibleProducts;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselContent}>
        {displayedProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image
              src={product.imageUrl || fallbackImage}
              alt={product.name}
              width={200}
              height={200}
              className={styles.image}
              unoptimized
            />
            <div className={styles.caption}>{product.name}</div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className={styles.navButtonLeft}>
        &#8592;
      </button>
      <button onClick={nextSlide} className={styles.navButtonRight}>
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
