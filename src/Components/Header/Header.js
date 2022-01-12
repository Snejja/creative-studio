import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <a href='*' className={styles.link}>
      wor<span className={styles.underline}>ks</span>
    </a>
    <a href='*' className={styles.link}>
      abo<span className={styles.underline}>ut</span>
    </a>

    <a href='*' className={styles.link}>
      servic<span className={styles.underline}>es</span>
    </a>
    <a href='*' className={styles.link}>
      bl<span className={styles.underline}>og</span>
    </a>
    <a href='*' className={styles.link}>
      conta<span className={styles.underline}>ct</span>
    </a>
  </header>
);

export default Header;
