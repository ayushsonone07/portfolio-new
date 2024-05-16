"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
import Link from 'next/link'

const Certificates = () => {
  return (
    <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={false}
        modules={[EffectFlip, Pagination, Navigation]}
        className='sm:w-96 sm:h-96 w-72 h-72'
      > 
        <SwiperSlide>
          <Link href="https://i.ibb.co/RcWfcMX/cs50x.jpg" >
            <Image src="/certificates/cs50x.jpeg"  width={800} height={800} alt='cs50x_certificate' />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="https://i.ibb.co/2ZtH8hX/Intel-one-API.jpg" >
            <Image src="/certificates/Intel_oneAPI.jpeg" width={800} height={800} alt='Intel_oneAPI_certificate' />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="https://i.ibb.co/f4ffkVw/AWS-Cloud-Foundations.jpg" >
            <Image src="/certificates/AWS_Cloud.jpg" width={800} height={800} alt='Cloud_certificate' />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="https://i.ibb.co/J7W04sQ/AWS-Academy-Machine-Learning.jpg" >
            <Image src="/certificates/AWS_ML.jpg" width={800} height={800} alt='Machine_learing_certificate' />
          </Link>
        </SwiperSlide>
      </Swiper>
  );
};

export default Certificates
