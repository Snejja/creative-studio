import cn from 'classnames';
import Header from '../Header';

import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Header />
        <div>
          <h1 className={styles.title}>WHERE GREAT IDEAS COME TO LIFE</h1>
          <p className={styles.subtitle}>
            Passionate creative studio helping startups grow their business!
          </p>
        </div>
        <div className={styles.pages}>
          <span className={cn(styles.page, styles.pageActive)}>01</span>
          <span className={styles.page}>02</span>
          <span className={styles.page}>03</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
