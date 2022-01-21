import cn from 'classnames';

import { ReactComponent as Star } from './star.svg';

import styles from './Rate.module.css';

const Rate = ({ grade }) => (
  <div className={styles.rate}>
    {[...Array(5)].map((_, index) => (
      <Star
        className={cn(styles.star, { [styles.starFull]: index + 1 <= grade })}
        key={index}
      />
    ))}
  </div>
);

export default Rate;
