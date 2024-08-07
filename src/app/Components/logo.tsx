import Image from 'next/image'
import React from 'react'
import logo1 from '../../../public/logo1.svg'
import logo2 from '../../../public/logo2.svg'

import logo3 from '../../../public/logo3.svg'

import logo4 from '../../../public/logo4.svg'

import logo6 from '../../../public/logo6.svg'




type Props = {}

const logo = (props: Props) => {
  return (
    <div className='bg-black w-full h-full sm:h-[100px] mt-0 sm:mt-[-100px] flex justify-center items-center'>
        <div className='max-w-[1240px] flex justify-around sm:justify-between  w-full flex-wrap gap-5 py-6 px-4'>
        <Image src={logo1} height={150} width={150} alt='cart' className='hidden sm:block' />
        <Image src={logo1} height={100} width={100} alt='cart' className='block sm:hidden' />

        <Image src={logo2} height={90} width={90} alt='cart'  className='hidden sm:block'/>
        <Image src={logo2} height={50} width={50} alt='cart' className='block sm:hidden'/>



        <Image src={logo3} height={150} width={150} alt='cart'  className='hidden sm:block'/>
        <Image src={logo3} height={100} width={100} alt='cart' className='block sm:hidden' />


        <Image src={logo4} height={80} width={100} alt='cart' className='hidden sm:block' />
        <Image src={logo4} height={80} width={100} alt='cart' className='block sm:hidden'  />



        <Image src={logo6} height={150} width={150} alt='cart' />



        </div>

    </div>
  )
}

export default logo