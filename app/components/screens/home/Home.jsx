import React from 'react';
import styles from './Home.module.scss';
import MetaTitle from '../../ui/MetaTitle';
import AboutMe from './about-me/AboutMe';
import Grid from './grid/Grid';
import Circles from '../../ui/circles/Circles';


const Home = ({ links, me, linksSocials }) => {
  return (

    <section className={styles.section}>
      <MetaTitle title={'zimenokk\'s cv'} />
      <div className={styles.container}>

        <AboutMe me={me} />
        <Grid links={links} gridTitle={'My tech stack'} />
        <Grid links={linksSocials} gridTitle={'Socials'} />

      </div>
      <Circles />
    </section>

  );
};

export default Home;


