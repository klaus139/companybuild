import React from 'react';
import { Button } from "@/components/ui/button"


const Hero = () => {
  return (
    <div className='relative w-full h-[500px] bg-no-repeat bg-cover bg-center flex items-center justify-start p-2' style={{ backgroundImage: 'url("/images/sdh.jpg")' }}>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10'>
        {/* Your content here */}
        <div className='flex flex-col  ml-[50px]'>
            <h1 className='text-white text-[65px] font-extrabold items-start justify-start leading-[63px] '>Welcome to our company</h1>
            <p className='text-gray-300 tex-[32px] ml-5 font-bold flex mt-6'>We deal in ENgineering and porblem solving</p>
            <div className='mt-3'>
                <Button className='bg-green-400 p-8 rounded-[40px] hover:bg-green-800 hover:border cursor-pointer'>Our Services</Button>
               

            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
