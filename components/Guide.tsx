import React from 'react';
import { PenLine } from 'lucide-react';

const Guide = () => {
  return (
    <div className='relative h-[200px] bg-no-repeat bg-cover bg-center flex items-center justify-center p-4' style={{ backgroundImage: 'url("/images/Site engineers working at a site.webp")' }}>
      <div className='absolute inset-0 bg-blue-700 opacity-50'></div>
      <h1 className='text-white z-10 font-extrabold text-center text-[40px] md:text-[60px]'>You Always Get The Best Service</h1>
      <div className='absolute top-[150px] left-0 right-0 mx-auto w-full max-w-[990px] bg-[#f2f1f1] shadow-lg p-6 rounded-lg'>
        <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
          <div className='flex flex-col items-center text-center mx-4'>
            <h1 className='text-black text-[28px] md:text-[34px] font-bold'>705</h1>
            <PenLine className='text-blue-800 text-[24px] md:text-[28px]' />
            <p className='text-black text-[20px] md:text-[26px] font-semibold'>Projects Completed</p>
          </div>
          <div className='flex flex-col items-center text-center mx-4'>
            <h1 className='text-black text-[28px] md:text-[34px] font-bold'>800+</h1>
            <PenLine className='text-blue-800 text-[24px] md:text-[28px]' />
            <p className='text-black text-[20px] md:text-[26px] font-semibold'>Satisfied Customers</p>
          </div>
          <div className='flex flex-col items-center text-center mx-4'>
            <h1 className='text-black text-[28px] md:text-[34px] font-bold'>35</h1>
            <PenLine className='text-blue-800 text-[24px] md:text-[28px]' />
            <p className='text-black text-[20px] md:text-[26px] font-semibold'>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide;
