import cn from 'classnames';

import { ReactComponent as BrandingIcon } from './draft.svg';
import { ReactComponent as DesignIcon } from './canvas.svg';
import { ReactComponent as DevelopmentIcon } from './workspace.svg';

import styles from './Services.module.css';

const Services = () => (
  <div className={styles.services}>
    <div className={styles.content}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.gap} />
      </div>
      <div className={styles.containers}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <h2 className={styles.name}>branding</h2>
              <div className={cn(styles.gap, styles.gapSmall)} />
            </div>
            <div className={styles.icon}>
              <BrandingIcon />
            </div>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <button className={styles.btn}>Read more</button>
          <div className={styles.border} />
        </div>
        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <h2 className={styles.name}>design</h2>
              <div className={cn(styles.gap, styles.gapSmall)} />
            </div>
            <div className={styles.icon}>
              <DesignIcon />
            </div>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <button className={styles.btn}>Read more</button>
          <div className={styles.border} />
        </div>
        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <h2 className={styles.name}>development</h2>
              <div className={cn(styles.gap, styles.gapSmall)} />
            </div>
            <div className={styles.icon}>
              <DevelopmentIcon />
            </div>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <button className={styles.btn}>Read more</button>
          <div className={styles.border} />
        </div>
      </div>
    </div>
  </div>
);

export default Services;
