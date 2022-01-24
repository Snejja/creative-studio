import cn from 'classnames';

import { ReactComponent as Briefcase } from './briefcase.svg';
import { ReactComponent as Mail } from './mail.svg';

import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <Briefcase />
        <p className={styles.title}>Want to work together?</p>
        <p className={styles.text}>Amazing. Tell us about your project!</p>
      </div>
      <div className={cn(styles.container, styles.containerGreen)}>
        <Mail />
        <p className={cn(styles.title, styles.titleWhite)}>Contact us</p>
        <a
          href='mailto:info@yourmail.com'
          className={cn(styles.text, styles.textWhite)}
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};
export default Contacts;
