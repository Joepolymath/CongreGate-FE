import React, { useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import AboutChurchImg from '../../assets/about-church.png';
import { useScroll, motion, useTransform } from 'framer-motion';

const AboutChurch = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.7, 1],
    ['0%', '-20%', '20%', '0%']
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.7, 1],
    ['0%', '25%', '50%', '0%']
  );

  return (
    <motion.div
      className={styles.aboutChurchSection}
      ref={targetRef}
      id="about"
    >
      <h2>About Church</h2>
      <div className={styles.aboutChurch}>
        <motion.div
          className={styles.imageDiv}
          style={{ x }}
          transition={{ delay: 5, ease: 'linear', duration: 0.5 }}
        >
          <Image
            className={styles.aboutChurchImg}
            src={AboutChurchImg}
            alt="About church image"
          />
        </motion.div>
        <div className={styles.aboutChurchContent}>
          <p>
            Welcome to our church on CongreGate! We are a community of believers
            who gather together to worship, learn, and grow in our faith. Our
            church is rooted in the teachings of Jesus Christ and our mission is
            to share His love and grace with everyone we meet.
          </p>
          <br />
          <p>Pastor & Mrs Pastor Joshua Ajagbe</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutChurch;
