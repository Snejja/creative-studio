import { ReactComponent as Facebook } from './facebookLogo.svg';
import { ReactComponent as Twitter } from './twitterLogo.svg';
import { ReactComponent as Pinterest } from './pinterestLogo.svg';

import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.contacts}>
      <p className={styles.address}>
        3rd Floor, Santa Monica Beach, CA, San Francisco
      </p>
      <a href='tel:(359)-0-123-456-789' className={styles.phone}>
        (359) 0 123 456 789 -{' '}
      </a>
      <a href='mailto:info@yourmail.com' className={styles.mail}>
        info@yourmail.com
      </a>
      <div className={styles.socialNetworks}>
        <Facebook />
        <Twitter />
        <Pinterest />
      </div>
    </div>
    <div className={styles.copyright}>
      <p className={styles.text}>
        Copyright 2016 - All Rights Reserved - Designed by JD
      </p>
    </div>
  </div>
);

export default Footer;
