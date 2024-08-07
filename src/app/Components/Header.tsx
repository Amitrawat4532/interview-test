'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/logo.png'
import user from '../../../public/user.svg'
import cart from '../../../public/cart.svg'
import search from '../../../public/search.svg'



import Navigation from './Navigation'
type Props = {}

const Header = (props: Props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu =()=>{
    setIsOpen(!isOpen)
  }
  return (
    
    <div className='w-full flex flex-col justify-start   bg-red-500 '>
<div className='bg-black w-full py-3 sm:py-6 justify-center items-center flex'>
  <p className='text-white text-[12px] sm:text-[14px]'>
  Sign up and get 20% off to your first order. <a href='#' className='underline'>Sign Up Now</a>
  </p>
</div>

    <div className=' bg-white   flex justify-center items-center py-6  px-4'>

<div className='w-full max-w-[1240px]   flex justify-between items-center'>
<div className='flex sm:hidden'>
  <button className='' onClick={toggleMenu}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill='black'><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
  </button>
</div>
<div className='logo '>
  <Image src={logo} height={50} width={100} alt='logo' />
</div>
<div className=' gap-4 hidden sm:flex'>
  {Navigation.map((navigation)=>{
    return(<>
    
    <a href={navigation.link} className='text-black'>{navigation.label}</a>
    </>)
  })}
</div>
<div className='flex '>
<input type='search' placeholder='Search for products' className='bg-[#F0F0F0] rounded-3xl py-2 px-3 w-[30px] sm:w-[561px] hidden sm:block'/>
</div>
<div className='flex gap-4'>
<Image src={search} height={25} width={25} alt='search' className='block sm:hidden ' />

<Image src={cart} height={25} width={25} alt='cart' />
<Image src={user} height={25} width={25} alt='cart' />


</div>

{isOpen && <div className='absolute top-[110px] left-0 bg-black w-full flex justify-center items-center py-4 px-5 gap-5 flex-col'>
  {Navigation.map((navigation)=>{
    return(<>
    
    <a href={navigation.link} className='text-white'>{navigation.label}</a>
    </>)
  })}
  </div>}
</div>
</div>
    </div>

    

  )
}

export default Header