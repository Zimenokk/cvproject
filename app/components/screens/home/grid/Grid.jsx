import React from 'react';
import styles from './Grid.module.scss';
import GridItem from './GridItem';


const Grid = ({ links, gridTitle }) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridTitle}><h2>{gridTitle} </h2></div>
      <div className={styles.grid}>
        {links.map(link => <GridItem key={link._id} item={link} />)}
      </div>
    </div>

  );
};

export default Grid;
