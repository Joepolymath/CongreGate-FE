import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/Home.module.css';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestimonyCard from '../testimonyCard/TestimonyCard';
import TestifierImg1 from '../../assets/testifierImg1.png';
import TestifierImg2 from '../../assets/testifierImg2.png';
import TestifierImg3 from '../../assets/testifierImg3.png';

const TestimoniesSection = () => {
  const testimonies = [
    {
      id: 1,
      img: TestifierImg1,
      name: 'Roland JK',
      content:
        'All Glory to God. I just got a VISA the USA, after long sessions of interviews full of doubts and fear. I am now fully based in Oklahoma with my family.',
    },
    {
      id: 1,
      img: TestifierImg2,
      name: 'Jennifer Reeves',
      content:
        'I have been trusting God for a life partner for years. Last month, I got married to the lover of my life. We just relocated to the UK, and it has been an awesome experience as a married woman.',
    },
    {
      id: 1,
      img: TestifierImg3,
      name: 'Roland JK',
      content:
        'This year, my music career has blossomed significantly. I played with Cory Henry in the Jazz concert at Rio in Brazil.',
    },
  ];
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`${styles.swiper} mySwiper`}
      >
        {testimonies.map((testimony) => {
          return (
            <SwiperSlide key={testimony.id} className={styles.swiperSlide}>
              <TestimonyCard
                name={testimony.name}
                img={testimony.img}
                content={testimony.content}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimoniesSection;
