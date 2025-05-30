// app/components/footer/Footer.tsx

'use client';

import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {currentYear} MS Ecommerce. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
