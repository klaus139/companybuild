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
                  <Image width={1000} height={1000} className="h-[300px]" src="/images/gen1.jpeg" alt="sasa" />
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
                  <Image width={1000} height={700} className="h-[300px]" src="/images/gen2.jpeg" alt="ssasas" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Heavy Duty Machine</a>
                  </h3>
                  <span>Energy Solutions</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <Image width={1000} height={700} className="h-[300px]" src="/images/gen3.jpeg" alt="asasa" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">High Rise Tower Infrastructure</a>
                  </h3>
                  <span>Networking</span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <Image width={1000} height={700} className="h-[300px]" src="/images/gen4.jpeg" alt="asasa" />
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
                  <Image width={1000} height={700} className="h-[300px]" src="/images/mast1.jpeg" alt="asasa" />
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
                  <Image width={1000} height={700} className="h-[300px]" src="/images/mast2.jpeg" alt="asasa" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Support</a>
                  </h3>
                  <span>Networking</span>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <Image width={1000} height={700} className="h-[300px]" src="/images/mast3.jpeg" alt="asasa" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Support</a>
                  </h3>
                  <span>Networking</span>
                </div>
              </div>
            </div> */}
           




          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
