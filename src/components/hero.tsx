"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { heroImages } from '@/constant/page';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { styles } from '@/utils/page';

export default function Hero() {
  return (
    <div className={`${styles.container} cursor-pointer py-0 lg:py-4`}>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => `
      <span class="${className}" style="background-color: white; width: 10px; height: 10px;"></span>
    `,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        {
          heroImages.map(el => (
            <SwiperSlide key={el.id} className=''>
              <Image alt='banner' src={el.banner} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
