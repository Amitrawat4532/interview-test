import React from 'react'
import ProductData from './ProductData'
import groupstar from "../../../public/groupstar.png"
import Image from 'next/image'

type Props = {}

const Product = (props: Props) => {
  return (
    <section className='w-full justify-center items-center flex bg-white   h-full sm:h-screen my-[140px] px-4 sm:px-0'>
        <div className='w-full max-w-[1240px] flex justify-center items-center  flex-col gap-12'>
        <h2 className="text-black font-extrabold text-[36px] sm:text-[64px] leading-[36px] sm:leading-[64px]">
        NEW ARRIVALS
        </h2>
        <div className='flex w-full justify-center items-center  gap-5 flex-wrap sm:flex-nowrap '>
           {ProductData.map((product, id)=>{
            return(<>
              <div className='flex gap-3 flex-col' key={id}>
                <Image src={product.image} alt='product img' height={200} width={300} />
                <h2 className='font-bold'>{product.Header}</h2>
                <div className='flex gap-2'>

                <Image src={groupstar} alt='product img' height={100} width={100} />
                <span>{product.Rating}</span>

                </div>
                <span className='text-[24px] font-bold'>{product.Price}</span>


              </div>
            </>)
           })}
        </div>
        <button className='border-[1px] border-gray-400 px-16 py-4 rounded-[62px]'>View All</button>
        </div>
    </section>
  )
}

export default Product