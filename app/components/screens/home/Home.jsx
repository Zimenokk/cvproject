import React from 'react';
import styles from './Home.module.scss';
import MetaTitle from '../../ui/MetaTitle';
import AboutMe from './about-me/AboutMe';
import RecentVideos from './recent-videos/RecentVideos';
import Grid from './grid/Grid';
import Circles from '../../ui/circles/Circles';


const Home = ({ links, me }) => {
  return (

    <section className={styles.section}>
      <MetaTitle title={'zimenokk cv'} />
      <div className={styles.container}>

        <AboutMe me={me} />
        <RecentVideos />
        <Grid links={links} />
        
      </div>
      <Circles />
    </section>

  );
};

export default Home;


