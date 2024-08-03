import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="team-area section-padding30">
        <div className="container">
          <div className="row">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle mb-70">
                <span>Professionalism </span>
                <h2>Our Gallery</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <Image width={1000} height={1000} className="h-[300px]" src="/images/WhatsApp Image 2024-07-31 at 12.55.31 PM (1).jpeg" alt="sasa" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Efficient Service</a>
                  </h3>
                  <span>Machine Maintenance</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <Image width={1000} height={700} className="h-[300px]" src="/images/WhatsApp Image 2024-07-31 at 12.55.35 PM.jpeg" alt="ssasas" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Telecommunication Mast</a>
                  </h3>
                  <span>Networking Solutions</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <Image width={1000} height={700} className="h-[300px]" src="/images/WhatsApp Image 2024-07-31 at 12.55.38 PM (3).jpeg" alt="asasa" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Maintenance</a>
                  </h3>
                  <span>Networking</span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <Image width={1000} height={700} className="h-[300px]" src="/images/WhatsApp Image 2024-07-31 at 12.55.30 PM (2).jpeg" alt="asasa" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Services</a>
                  </h3>
                  <span>Networking</span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <Image width={1000} height={700} className="h-[300px]" src="/images/WhatsApp Image 2024-07-31 at 12.55.34 PM.jpeg" alt="asasa" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Solutions</a>
                  </h3>
                  <span>Networking</span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <Image width={1000} height={700} className="h-[300px]" src="/images/WhatsApp Image 2024-07-31 at 12.55.38 PM (2).jpeg" alt="asasa" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Support</a>
                  </h3>
                  <span>Networking</span>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
