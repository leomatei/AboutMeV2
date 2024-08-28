// import { useState, useEffect } from 'react'
import useScroll from '@/utils/custom-hooks/useScroll'
import styles from './styles.module.scss'

const Header = () => {
  const scrolled = useScroll(20, 100)

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolled : ''
      }`}
    >
      <h1 className={styles.left}>Leo Matei</h1>
      <div className={styles.right}>
        <button className={styles.button}>
          Technologies
        </button>
        <button className={styles.button}>
          Projects
        </button>
        <button className={styles.button}>
          Contact
        </button>
      </div>
    </header>
  )
}

export default Header
