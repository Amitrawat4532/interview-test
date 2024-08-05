'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/logo.webp'
import Navigation from './Navigation'
type Props = {}

const Header = (props: Props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='bg-black opacity-[0.9] px-6 flex justify-between items-center py-3 absolute top-0 left-0 w-full'>
      <div className='logo '>
        <Image src={logo} height={50} width={100} alt='logo' />
      </div>
      <div className=' gap-4 hidden sm:flex'>
        {Navigation.map((navigation)=>{
          return(<>
          
          <a href={navigation.link} className='text-white'>{navigation.label}</a>
          </>)
        })}
      </div>
      <div className='hidden gap-3 sm:flex'>
        <button className='text-white'>Login</button>
        <button className='text-white bg-blue-600 px-4  py-2 rounded-xl'>Register</button>


      </div>
      <div className='flex sm:hidden'>
        <button className='' onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill='white'><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
        </button>
      </div>
      {isOpen && <div className='absolute top-[90px] left-0 bg-black w-full flex justify-center items-center py-4 px-5 gap-5 flex-col'>
        {Navigation.map((navigation)=>{
          return(<>
          
          <a href={navigation.link} className='text-white'>{navigation.label}</a>
          </>)
        })}
        </div>}
    </div>
  )
}

export default Header