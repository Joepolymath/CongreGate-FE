import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Link href="/" className={styles.brand}>
        <Image src={Logo} alt="Brand Logo" />
        <h2>CongreGate</h2>
      </Link>
      <div className={`${styles.menu}`}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Testimonies</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Give Online</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
