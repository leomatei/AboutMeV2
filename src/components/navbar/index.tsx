import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.left}>Leo Matei</div>
      <div className={styles.right}>
        <button className={styles.button}>Technologies</button>
        <button className={styles.button}>Projects</button>
        <button className={styles.button}>Contact</button>
      </div>
    </header>
  );
};

export default Header;
