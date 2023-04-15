import React from 'react';
import styles from '@/styles/Home.module.css';
import Navbar from '../navbar/Navbar';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
      <div className={styles.heroMain}>
        <div className={styles.heroWelcome}>
          <h1>Welcome</h1>
          <h3>Find out more about us...</h3>
        </div>
        <div className={styles.heroForm}>
          <h2>Join Us</h2>
          <div className={styles.formDiv}>
            <form action="">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
              <p>Would you like us to reach out to you?</p>
              <label htmlFor="yes">
                <input type="radio" id="yes" name="reach-out-radio" />
                Yes
              </label>
              <label htmlFor="no">
                <input type="radio" id="no" name="reach-out-radio" />
                No
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
