import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <a href='*' className={styles.link}>
      works
      <div className={styles.gap} />
    </a>
    <a href='*' className={styles.link}>
      about
      <div className={styles.gap} />
    </a>
    <a href='*' className={styles.link}>
      services
      <div className={styles.gap} />
    </a>
    <a href='*' className={styles.link}>
      blog
      <div className={styles.gap} />
    </a>
    <a href='*' className={styles.link}>
      contact
      <div className={styles.gap} />
    </a>
  </header>
);

export default Header;
