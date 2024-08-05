'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination ,Autoplay} from 'swiper/modules';
import TestimonialsData from '@/app/Components/TestimonialsData'
import Image from 'next/image';
import star from '../../../public/star.png'
import comma from '../../../public/comma.png'


type Props = {
    data?: any;
}

const Testimonials = (data: Props) => {
  return (
    <section className='bg-blue-300 h-screen w-full justify-center items-center flex flex-col gap-12 px-5' >
          <div className="flex flex-col">

<h1 className="text-black font-bold text-[30px] sm:text-[60px] text-center">
  Testimonials From Our Customer 
</h1>
<h2 className="text-black font-bold text-[12px] sm:text-[20px] text-center">
  Connecting Talent with Opportunity : Your Gateway to Success
</h2>
</div>

<div className='sm:flex justify-center items-center w-full   max-w-[1140px] hidden'>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
       
        modules={[Pagination]}
        className="mySwiper"
      >

        {TestimonialsData.map((testimonials,id)=>{
            return(
                <>
        <SwiperSlide>

            <div className='bg-white flex flex-col gap-8 p-6 rounded-2xl ' key={id}>
                <div className='flex flex-col gap-3'>

                <div className='flex gap-3'>
              <Image src={star} alt='star' height={30} width={30} />
              <Image src={star} alt='star' height={30} width={30} />

              <Image src={star} alt='star' height={30} width={30} />

              <Image src={star} alt='star' height={30} width={30} />

              <Image src={star} alt='star' height={30} width={30} />


                </div>
                <p className='text-black'>{testimonials.heading}</p>
                <p className='text-black'>{testimonials.descriptio}</p>
                </div>
                <div className='relative flex gap-3 items-center'>
                    <Image src={testimonials.image} alt='profile' height={150} width={150} className='rounded-[100%] w-[70px] h-[70px]' />
                    <div className='flex flex-col'>
                        <p className=''>{testimonials.clientname}</p>
                        <p className=''>Happy Client</p>

                    </div>
                    <Image className='absolute top-[-30px] right-[0px]' alt='comma' src={comma} />
                </div>

              </div>
        </SwiperSlide>
        </>
            )
        })}
            
      </Swiper>
</div>
<div className='sm:hidden justify-center items-center w-full   max-w-[1140px] flex'>
<Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >

        {TestimonialsData.map((testimonials,id)=>{
            return(
                <>
        <SwiperSlide>

            <div className='bg-white flex flex-col gap-8 p-6 rounded-2xl ' key={id}>
                <div className='flex flex-col gap-3'>

                <div className='flex gap-3'>
              <Image src={star} alt='star' height={30} width={30} />
              <Image src={star} alt='star' height={30} width={30} />

              <Image src={star} alt='star' height={30} width={30} />

              <Image src={star} alt='star' height={30} width={30} />

              <Image src={star} alt='star' height={30} width={30} />


                </div>
                <p className='text-black'>{testimonials.heading}</p>
                <p className='text-black'>{testimonials.descriptio}</p>
                </div>
                <div className='relative flex gap-3 items-center'>
                    <Image src={testimonials.image} alt='profile' height={150} width={150} className='rounded-[100%] w-[70px] h-[70px]' />
                    <div className='flex flex-col'>
                        <p className=''>{testimonials.clientname}</p>
                        <p className=''>Happy Client</p>

                    </div>
                    <Image className='absolute top-[-30px] right-[0px]' alt='comma' src={comma} />
                </div>

              </div>
        </SwiperSlide>
        </>
            )
        })}
            
      </Swiper>
</div>
    </section>
  )
}

export default Testimonials