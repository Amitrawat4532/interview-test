import React from 'react'
import logo from '../../../public/logo.png'
import fb from '../../../public/fb.svg'
import insta from '../../../public/instagram.svg'
import payment from '../../../public/payment.png'
import git from '../../../public/git.svg'
import Image from 'next/image'








type Props = {}

const Footer = (props: Props) => {
  return (
    <section className='w-full bg-[#F0F0F0] flex justify-center items-center flex-col'>
        <div className='max-w-[1240px] py-12 w-full flex justify-between items-center   gap-6 flex-wrap sm:flex-nowrap px-4 sm:px-0'>
         <div className=' flex flex-col gap-4 w-full  '>
  <Image src={logo} height={100} width={150} alt='logo' />
  <p className=''>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
  <div className='flex gap-4'>
  <Image src={fb} height={30} width={30} alt='logo' />
  <Image src={insta} height={30} width={30} alt='logo' />

  <Image src={git} height={30} width={30} alt='logo' />


  </div>
         </div>
         <div className='flex flex-col gap-5 w-[40%] sm:w-full  items-center '>
<span className='text-bold'>Company</span>
<ul className='flex flex-col gap-3'>
    <li className='text-gray-500'>About </li>
    <li className='text-gray-500'>Feauture</li>
    <li className='text-gray-500'>Works</li>
    <li className='text-gray-500'>Career</li>



</ul>
         </div>
         <div className='flex flex-col gap-5 w-[40%] sm:w-full items-center'>
<span className='text-bold'>Company</span>
<ul className='flex flex-col gap-3'>
    <li className='text-gray-500'>About </li>
    <li className='text-gray-500'>Feauture</li>
    <li className='text-gray-500'>Works</li>
    <li className='text-gray-500'>Career</li>



</ul>
         </div>
         <div className='flex flex-col gap-5 w-[40%] sm:w-full items-center'>
<span className='text-bold'>Company</span>
<ul className='flex flex-col gap-3'>
    <li className='text-gray-500'>About </li>
    <li className='text-gray-500'>Feauture</li>
    <li className='text-gray-500'>Works</li>
    <li className='text-gray-500'>Career</li>



</ul>
         </div>
         <div className='flex flex-col gap-5 w-[40%] sm:w-full items-center'>
<span className='text-bold'>Company</span>
<ul className='flex flex-col gap-3'>
    <li className='text-gray-500'>About </li>
    <li className='text-gray-500'>Feauture</li>
    <li className='text-gray-500'>Works</li>
    <li className='text-gray-500'>Career</li>



</ul>
         </div>
        </div>
       <div className='flex justify-center items-center w-full '>
        <div className='flex justify-between items-center w-full border-t-[1px] border-gray-400 py-4 max-w-[1240px] flex-col sm:flex-row gap-3'>

        <span className='text-gray-400'>Shop.co © 2000-2023, All Rights Reserved</span>
<Image src={payment} height={250} width={250} alt='cart' />

        </div>
       </div>
    </section>
  )
}

export default Footer