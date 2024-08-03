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
                  Edosa Iyayi....MD
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="right-caption">
                <div className="section-tittle section-tittle2 mb-50">
                  <span>Mission Statement</span>
                  <h2>Mission and Vision</h2>
                </div>
                <div className="support-caption">
                  <p className="pera-top">
                    Vision: To be the best and most reliable telecommunications
                    infrastructure maintenance/support contractor in Africa,
                    driving technological innovation and setting new standards
                    for excellence. Mission: To deliver high-performance
                    technical solutions and support, enabling our clients to
                    succeed and achieve their goals.
                  </p>
                  <h2 className='text-white'>Competitive Advantage </h2>
                  <p className="mb-65">
                    Our competitive advantage is
                    summarized in our corporate culture, our experience and
                    expertise as well as our ability to explore and utilized
                    technology to deliver maximum satisfaction to our clients
                    with; - Strong technical team with extensive experience -
                    Robust service delivery model Emphasis on quality control
                    and assurance - Continuous monitoring and evaluation
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
