import React from 'react'
import AboutCard from './AboutCard'
import { IconType } from 'react-icons';
import Image from "next/image"
import { Button } from './ui/button';

interface ContactBannerProps {
    data: {
        icon: IconType;
        heading: string;
        text: string;
    }[];
}

const ContactBanner: React.FC<ContactBannerProps> = ({ data }) => {
    //console.log(data)
  return (
    <div className='w-full flex px-[50px] my-[50px]'>
     <div className='mx-5 flex'>
     <div className='flex flex-col w-[60%]'>
        <h1 className='blue-text text-[50px] font-bold leading-[32px]'>Our Main Services</h1>
        <p className='blue-text mt-6'>We offer a range of professional services both locally and internationally.</p>

        <div className='flex flex-wrap gap-3 mt-[30px]'>
          {data.map((item, index) => (
            <AboutCard key={index} icon={item.icon} heading={item.heading} text={item.text} />
          ))}
        </div>
      </div>

      <div className='flex  w-[50%] mt-[110px]  border-[4px] border-gray-800'>
        <div className='m-2 bg-white flex flex-col'>
            <div>
                <Image 
                src='/images/about1.webp'
                alt='about'
                width={600}
                height={500}
                className='w-full'
                />
                <p className='text-gren-300 text-[24px] mt-3 font-bold'>Contact us today</p>
                <Button>
                    Contact us
                </Button>
            </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default ContactBanner
