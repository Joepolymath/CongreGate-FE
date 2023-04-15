import Head from 'next/head';
import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/hero/Hero';
import AboutChurch from '@/components/aboutChurch/AboutChurch';
import TestimoniesSection from '@/components/testimoniesSection/TestimoniesSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CongreGate</title>
        <meta name="description" content="Church Management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main className={styles.main}>
        <Hero />
        <AboutChurch />
        <TestimoniesSection />
      </motion.main>
    </>
  );
}
