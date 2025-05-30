// app/favorites/page.tsx

import Wishlist from '../components/favorites/Wishlist';
import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Your Favorites</h1>
      <Wishlist />
    </div>
  );
};

export default FavoritesPage;
