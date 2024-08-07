import React from 'react'

type Props = {}

const Imagessec = (props: Props) => {
  return (
    <section className='w-full justify-center items-center flex bg-white   h-full sm:h-screen my-[140px] px-4'>
        <div className='w-full max-w-[1240px] flex justify-center items-center bg-[#F0F0F0] flex-col gap-[64px] p-4 py-10 px-4 sm:p-[64px] rounded-[40px]'>
        <h2 className="text-black font-extrabold text-[36px] sm:text-[64px] leading-[36px] sm:leading-[64px]">
        BROWSE BY DRESS STYLE
        </h2>
        <div className='flex w-full gap-[20px] flex-col'>
            <div className='w-full flex  flex-col sm:flex-row gap-[30px]'>

            <div className=' w-full sm:w-[30%] h-[289px] rounded-3xl bg-one'>
                
            </div>
            <div className=' w-full sm:w-[70%] h-[289px] rounded-3xl bg-two'></div>

            </div>
            <div className='w-full flex  flex-col sm:flex-row gap-[30px]'>
            <div className=' w-full sm:w-[70%] h-[289px] rounded-3xl bg-three'></div>

<div className=' w-full sm:w-[30%] h-[289px] rounded-3xl bg-one'>
    
</div>

</div>
        </div>
        </div>
    </section>
  )
}

export default Imagessec