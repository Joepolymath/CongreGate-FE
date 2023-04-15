import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import TestifierImg1 from '../../assets/testifierImg1.png';

const TestimonyCard = ({ img, name, content }) => {
  return (
    <div className={styles.testimonyCard}>
      <div className={styles.testimonyHead}>
        <Image src={img} alt="testifier image" />
        <h2>{name}</h2>
      </div>
      <div className={styles.testimonyContent}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
