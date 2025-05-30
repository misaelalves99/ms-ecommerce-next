// app/components/favorites/FavoriteButton.tsx

"use client";

import React from "react";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";
import styles from "./FavoriteButton.module.css";

const FavoriteButton: React.FC = () => {
  const { wishlist } = useWishlist();

  return (
    <div className={styles.favoriteButton}>
      <FaHeart className={styles.icon} />
      {wishlist.length > 0 && <span className={styles.favoriteCount}>{wishlist.length}</span>}
    </div>
  );
};

export default FavoriteButton;
