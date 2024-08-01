"use client"
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample settings for the slider
const settings:any = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Testimonial = () => {
  return (
    <div>
      <div
        className="testimonial-area testimonial-padding"
        style={{
          backgroundImage: 'url(/images/section_bg04.jpg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-10 col-lg-10 col-md-9">
              <Slider {...settings} className="h1-testimonial-active">
                <div className="single-testimonial text-center">
                  <div className="testimonial-caption">
                    <div className="testimonial-top-cap">
                      {/* SVG Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="67" height="49" viewBox="0 0 67 49">
                        <path fillRule="evenodd" fill="rgb(240, 78, 60)" d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z" />
                      </svg>
                      <p>
                    They delivered exceptional networking solutions that have dramatically improved our companys connectivity and efficiency. Their innovative approach and thorough understanding of our needs resulted in a tailor-made network that performs flawlessly. The level of support we have received has been outstanding, with quick responses and effective solutions. We are thrilled with the results and highly recommend their services.
                      </p>
                    </div>
                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                      <div className="founder-img">
                        <Image
                          src="/images/n1.jpg"
                          alt="Jessya Inn"
                          width={100}
                          height={100}
                          className='h-[100px] w-[100px] rounded-full'
                       
                        />
                      </div>
                      <div className="founder-text">
                        <span>Akintola Samuel</span>
                        <p>Photographer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial text-center">
                  <div className="testimonial-caption">
                    <div className="testimonial-top-cap">
                      {/* SVG Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="67" height="49" viewBox="0 0 67 49">
                        <path fillRule="evenodd" fill="rgb(240, 78, 60)" d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z" />
                      </svg>
                      <p>
                      Working with these guys has been a game-changer for our business. Their tailored approach and in-depth knowledge of network solutions have transformed our operations. The improved performance and security of our network have exceeded our expectations. Their support team is always available and responsive, making it easy to manage and troubleshoot any issues. Thank you for your outstanding work
                      </p>
                    </div>
                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                      <div className="founder-img">
                        <Image
                          src="/images/n2.jpeg"
                          alt="Jessya Inn"
                          width={100}
                          height={100}
                          className='h-[100px] w-[100px] rounded-full'
                       
                        />
                      </div>
                      <div className="founder-text">
                        <span>Friday Akpukpo</span>
                        <p>Engineer</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more testimonials here */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
