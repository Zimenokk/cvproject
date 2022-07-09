import React from 'react';
import MetaTitle from '../../ui/MetaTitle';
import styles from './Home.module.scss';

const Home = ({ links, me }) => {
  return (
    <section className={styles.section}>
      <MetaTitle title={'zimenokk CV'} />
      <div className={styles.container}>
        
      </div>

    </section>
  );
};

export default Home;


