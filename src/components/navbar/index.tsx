import {
  useState,
  useEffect,
  useCallback,
} from 'react'
import { debounce } from 'lodash'
import styles from './styles.module.scss'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const handleScrollUp = debounce(() => {
    if (window.scrollY <= 20) {
      setScrolled(false)
    }
  }, 100)

  const handleScroll = useCallback(() => {
    if (window.scrollY > 20 && !scrolled) {
      setScrolled(true)
    } else if (window.scrollY <= 20 && scrolled) {
      handleScrollUp()
    }
  }, [scrolled, handleScrollUp])

  useEffect(() => {
    window.addEventListener(
      'scroll',
      handleScroll
    )
    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [handleScroll])

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolled : ''
      }`}
    >
      <div className={styles.left}>Leo Matei</div>
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
