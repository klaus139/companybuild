import React from 'react';
import { Button } from "@/components/ui/button"


const Hero = () => {
  return (
    <div className='relative w-full h-[500px] bg-no-repeat bg-cover bg-center flex items-center justify-center p-2' style={{ backgroundImage: 'url("/images/sdh.jpg")' }}>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10'>
        {/* Your content here */}
        <div>
            <h1 className='text-white text-[65px] font-extrabold items-start justify-start leading-[63px] '>Welcome to our company</h1>
            <p className='text-white tex-[32px] font-bold m-auto flex justify-center mt-6'>We deal in ENgineering and porblem solving</p>
            <div>
                <Button>Get Started</Button>
                <Button>Our Team</Button>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
