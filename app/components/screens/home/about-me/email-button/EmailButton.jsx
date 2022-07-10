import React from 'react';
import styles from './EmailButton.module.scss';
import Image from 'next/image';

const EmailButton = () => {
  return (
    <div className={styles.button}>
      <a
        href='mailto:dzimenokk@gmail.com'
        target='_blank'
        rel='noreferrer'
        title='dzimenokk@gmail.com'
      >
				<span>
					<Image
            src={`http://localhost:3000/icons/email.svg`}
            alt=''
            height={18}
            width={18}
          />
				</span>
        <span>Email</span>
      </a>
    </div>
  );
};

export default EmailButton;
