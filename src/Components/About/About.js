import cn from 'classnames';

import imageOne from './image1.png';
import imageTwo from './image2.png';

import styles from './About.module.css';

const About = () => (
  <div className={styles.about}>
    <div className={cn(styles.wrapper, styles.container1)}>
      <h1 className={styles.title}>we are</h1>
      <h1 className={styles.name}>the sqwd</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
    <div className={cn(styles.wrapper, styles.container2)}>
      <img src={imageOne} alt='*' />
    </div>
    <div className={cn(styles.wrapper, styles.container3)}></div>
    <div className={cn(styles.wrapper, styles.container4)}>
      <img src={imageTwo} alt='*' />
    </div>
    <div className={cn(styles.wrapper, styles.container5)}>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
  </div>
);

export default About;
