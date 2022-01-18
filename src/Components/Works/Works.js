import cn from 'classnames';
import Tabs from '../Tabs';

import styles from './Works.module.css';

const Works = () => {
  let tabs = [
    {
      id: 'all',
      title: 'all',
    },
    {
      id: 'web design',
      title: 'web design',
    },
    {
      id: 'branding',
      title: 'branding',
    },
    {
      id: 'photography',
      title: 'photography',
    },
    {
      id: 'illustration',
      title: 'illustration',
    },
  ];
  let works = [
    {
      id: 'b6102e06-ca52-4eb7-88f8-dce3a3d29e32',
      header: '100 years photography',
      image: 'c49bd292-d6af-483d-a2e4-35953fd3a93c',
      type: 'Photography',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '0b4e8719-1840-42b0-b6a2-74ec4e2e2989',
      header: "a kitten's life",
      image: '067dee72-b78e-4fe3-acee-09f56b47138c',
      type: 'Photography',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '7f306d19-39e3-4d00-a44b-c121e46d51c8',
      header: 'groovemade products for mac',
      image: '72ca927b-6cd1-487f-a39d-9fff6c411a46',
      type: 'Photography',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '934aba67-9c08-4a4a-9356-0503304978e5',
      header: "apple's lost magic",
      image: '1bf38d3d-c560-47f1-877d-a2ee2ab73dbf',
      type: 'Photography',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div className={styles.works}>
      <div className={styles.section}>
        <h1 className={styles.title}>Latest Works</h1>
        <div className={styles.gap} />
        <Tabs tabs={tabs} />
      </div>
      {works.map((el, index) => (
        <div
          className={cn(styles.section, {
            [styles.sectionRight]: index % 2 === 0,
            [styles.sectionLeft]: index % 2 !== 0,
          })}
        >
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/files/${el.image}.png)`,
            }}
          >
            <p
              className={cn(styles.header, {
                [styles.headerRight]: index % 2 === 0,
                [styles.headerLeft]: index % 2 !== 0,
              })}
            >
              {el.header}
            </p>
          </div>
          <div
            className={cn(styles.content, {
              [styles.contentRight]: index % 2 === 0,
              [styles.contentLeft]: index % 2 !== 0,
            })}
          >
            <h2 className={styles.type}>{el.type}</h2>
            <p className={styles.text}>{el.content}</p>
            <button className={styles.btnRead}>read more</button>
          </div>
        </div>
      ))}
      <div className={cn(styles.section, styles.sectionRight)}>
        <button className={styles.btnView}>view more</button>
      </div>
    </div>
  );
};

export default Works;
