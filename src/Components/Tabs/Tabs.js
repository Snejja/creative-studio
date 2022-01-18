import cn from 'classnames';
import { useState } from 'react';

import styles from './Tabs.module.css';

const Tabs = ({ tabs }) => {
  const [tabActive, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={styles.tabs}>
      {tabs.map(({ id, title }) => (
        <button
          onClick={() => setActiveTab(id)}
          className={cn(styles.tab, { [styles.tabActive]: tabActive === id })}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
