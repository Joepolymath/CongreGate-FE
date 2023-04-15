import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import TestifierImg1 from '../../assets/testifierImg1.png';

const TestimonyCard = () => {
  return (
    <div className={styles.testimonyCard}>
      <div className={styles.testimonyHead}>
        <Image src={TestifierImg1} alt="testifier image" />
        <h2>John Thomas</h2>
      </div>
      <div className={styles.testimonyContent}>
        <p>
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </p>
      </div>
    </div>
  );
};

export default TestimonyCard;
