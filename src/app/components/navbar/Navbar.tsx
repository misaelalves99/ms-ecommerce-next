"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import CartButton from "../cart/CartButton"; 
import FavoriteButton from "../favorites/FavoriteButton";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          MS Ecommerce
        </Link>

        <div className={styles.navLinks}>
          <Link
            href="/"
            className={`${styles.link} ${currentPath === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`${styles.link} ${currentPath === "/products" ? styles.active : ""}`}
          >
            Produtos
          </Link>
          <Link
            href="/login"
            className={`${styles.link} ${currentPath === "/login" ? styles.active : ""}`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`${styles.link} ${currentPath === "/register" ? styles.active : ""}`}
          >
            Registro
          </Link>
          <Link href="/cart" className={styles.link}>
            <CartButton />
          </Link>
          <Link href="/favorites" className={styles.link}>
            <FavoriteButton />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
