import React from 'react';
import { useOutside } from '../../../../../hooks/useOutside';
import cn from 'classnames';
import styles from './DescriptionButton.module.scss';

const DescriptionButton = ({ description }) => {

  const { isShow, setIsShow, ref } = useOutside(false); //open with click on elem and close by clicking elsewhere

  return (
    <div className={styles.parrent} ref={ref}>
      <button onClick={() => setIsShow(!isShow)} className={cn({
        [styles.active]: isShow
      })}>
        <span>About me</span>
      </button>
      {isShow && <article>{description}</article>}
    </div>
  );
};

export default DescriptionButton;
