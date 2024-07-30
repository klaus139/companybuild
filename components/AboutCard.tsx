import React from 'react'
import { IconType } from 'react-icons';

interface IconProps {
    icon: IconType;
    heading: string;
    text: string;
}

const AboutCard: React.FC<IconProps> = ({ icon:Icon, heading, text }) => {
  return (
    <div className='p-4 border border-green-200 hover:bg-green-900 hover:text-white  bg-green-200 w-[350px] flex flex-col px-auto py-3 items-center justify-center p-auto  rounded-lg'>
      <Icon className='text-4xl mb-4 mt-3 hover:text-white'  /> {/* Render the icon component */}
      <h2 className='text-xl font-semibold mt-3'>{heading}</h2>
      <p className='mt-3 text-[16px] font-sans font-300 mx-5 '>{text}</p>
    </div>
  )
}

export default AboutCard
