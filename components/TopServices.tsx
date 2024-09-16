import React from "react";
import Image from "next/image";

const TopServices = () => {
  return (
    <div>
      <div
        className="support-company-area pt-100 pb-100 section-bg fix"
        style={{
          backgroundImage: "url(/images/section_bg02.jpg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="support-location-img">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/ceo.jpeg"
                  alt="Top Services Image"
                  layout="responsive"
                />
                <p className="italic absolute right-0 mr-7 text-white flex flex-end self-end items-end">
                  Edosa Iyayi....MD (CEO)
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="right-caption">
                <div className="section-tittle section-tittle2 mb-50">
                  <span>Mision Statement</span>
                  <h2>Mission and Vision</h2>
                </div>
                <div className="support-caption">
                  <p className="pera-top">
                    At DA SEO ENGINEERING SERVICES LIMITED, we are dedicated to delivering exceptioanl telecommunications infrastructure operations and maintenance service that drive progress and success.
                    With a strong team, robust service delivery model and unwavering commitment to quality, safety and customer satisfaction, we are shaping the future of telecommunications in Africa. 
                    Join us in shaping the future of telecommunications in Africa. Together let us create a connected world that empowers growth, progres and limitless possibilities.
                  </p>
                  <h2 className='text-white'>Our Mantra </h2>
                  <p className="mb-65">
                  Vision: To be the best and most reliable telecommunications
                    infrastructure maintenance/support contractor in Africa,
                    driving technological innovation and setting new standards
                    for excellence. 
                  Mission: To deliver high-performance
                    technical solutions and support, enabling our clients to
                    succeed and achieve their goals.
                    
                  </p>
                  <a href="/about" className="btn post-btn">
                    More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
