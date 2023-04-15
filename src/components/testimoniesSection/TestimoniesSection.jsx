import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/Home.module.css';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestimonyCard from '../testimonyCard/TestimonyCard';

const TestimoniesSection = () => {
  return (
    <div className={styles.testimoniesSection}>
      <h2>Testimonies</h2>
      <Swiper
        spaceBetween={5}
        slidesPerView={'auto'}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        //   navigation={true}
        modules={[Autoplay, Pagination]}
        className={`${styles.swiper} mySwiper`}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <TestimonyCard />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <TestimonyCard />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <TestimonyCard />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <TestimonyCard />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <TestimonyCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimoniesSection;
