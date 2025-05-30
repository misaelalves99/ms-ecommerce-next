// app/page.tsx

'use client';

import { useRouter } from 'next/navigation';
import styles from './HomePage.module.css';
import Carousel from './components/carousel/Carousel';

const HomePage = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/products');
  };

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Bem-vindo ao Nosso E-commerce</h1>
        <p className={styles.description}>Explore nossos produtos incríveis!</p>
        <button className={styles.heroButton} onClick={handleNavigate}>
          Ver Produtos
        </button>
      </section>

      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Produtos em Destaque</h2>
        <Carousel />
      </section>
    </main>
  );
};

export default HomePage;
