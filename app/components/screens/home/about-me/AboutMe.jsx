import React from 'react';
import styles from './AboutMe.module.scss';
import Image from 'next/image';
import EmailButton from './email-button/EmailButton';
import DescriptionButton from './description-button/DescriptionButton';

const AboutMe = ({ me }) => {
  return (
    <div className={styles.me}>
      <div className={styles['image-wrapper']}>
        <Image
          // src={`${APP_URL}${me.avatar}`}
          src={`${me.avatar}`}
          width={190}
          height={190}
          className={styles.image}
          alt={me.siteName}
          quality={100}
        />
      </div>
      <div className={styles.heading}>
        <span>zimenokk</span>
        <Image
          src={`http://localhost:3000/icons/verified.svg`}
          alt=''
          height={16}
          width={16}
        />
      </div>
      <EmailButton />
      <DescriptionButton description={me.description} />
    </div>
  );
};

export default AboutMe;
