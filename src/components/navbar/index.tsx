import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
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
