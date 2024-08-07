import Image from "next/image";
import React from "react";
import stars from '../../../public/stars.svg'


type Props = {};

const Homepage = (props: Props) => {
  return (
    <section className="bg-image flex justify-center   w-full h-full py-[70px] sm:py-0 sm:h-[90vh] flex-col px-5 gap-10  overflow-hidden">
      <div className="flex  gap-10  w-full  justify-center items-center">
        <div className="flex flex-col gap-8 w-[1240px] relative  h-full">
          <div className="absolute top-[-100px] right-[-160px] ">
          <Image src={stars} height={50} width={100} alt='logo' />

          </div>
          <div className="absolute top-[100px] right-[400px] ">
          <Image src={stars} height={50} width={50} alt='logo' />

          </div>

        <h1 className="text-black font-extrabold text-[36px] sm:text-[64px] leading-[36px] sm:leading-[64px]">
        FIND CLOTHES<br/>THAT MATCHES <br/>YOUR STYLE
        </h1>
        <h2 className="text-gray-400 font-normal text-[12px] sm:text-[16px]">
        Browse through our diverse range of meticulously crafted garments,<br/> designed to bring out your individuality and cater to your sense of style.
        </h2>
        <button className="bg-black rounded-3xl px-14 text-white py-4 w-full sm:max-w-[210px]">Shop Now</button>
        <div className="flex w-full gap-5  flex-wrap sm:flex-row  justify-center sm:justify-start items-center">
           <div className="flex border-r-[1px] border-gray-400 pr-8 sm:pr-8 flex-col  w-[40%] sm:w-[20%]">
            <h3 className="text-[40px] font-bold">200+</h3>
            <p className="text-[12px] sm:text-[16px]">International Brands</p>
           </div>
           <div className="flex  flex-col  sm:pr-8  px-2 sm:px-8  w-[40%] sm:w-[20%] justify-center sm:justify-start items-center">
            <h3 className="text-[40px] font-bold">2,000+</h3>
            <p className="text-[12px] sm:text-[16px]">High-Quality Products</p>
           </div>
           <div className="flex sm:border-l-[1px] sm:border-gray-400 px-2 sm:px-8 flex-col pr-8  w-[100%] justify-center sm:justify-start items-center sm:w-[20%]">
            <h3 className="text-[40px] font-bold">30000+</h3>
            <p className="text-[12px] sm:text-[16px]">Happy Customers</p>
           </div>
        </div>

        </div>
       

   
      </div>
      
    </section>
  );
};

export default Homepage;
