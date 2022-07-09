import React from 'react';
import styles from './Home.module.scss';
import MetaTitle from '../../ui/MetaTitle';


const Home = ({ links, me }) => {
  return (

    <section className={styles.section}>
      <MetaTitle title={'zimenokk cv'} />
      Home
    </section>

  );
};

export default Home;


