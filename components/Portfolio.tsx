import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="services-area section-padding3">
        <div className="container">
          <div className="row">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle mb-70">
                <span>Our Portfolios of Projects</span>
                <h2>Featured Projects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-10 ">
              <div className="single-services mb-100">
                <div className="services-img">
                  <Image
                    width={500}
                    height={500}
                    src="/images/WhatsApp Image 2024-08-06 at 11.34.19 PM.jpeg"
                    alt="sssas"
                    className="h-[500px]"
                  />
                </div>
                <div className="services-caption">
                  <span>Renewable Telecommunications Energy Solutions</span>
                  <p>
                    <a href="#">
                      Solar Powered Transmissions
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10">
              <div className="single-services mb-100">
                <div className="services-img">
                  <Image
                    width={500}
                    height={500}
                    src="/images/WhatsApp Image 2024-08-06 at 11.34.20 PM (3).jpeg"
                    alt="xxcxc"
                    className="h-[500px]"
                  />
                </div>
                <div className="services-caption">
                  <span>High Quality Diesel Engines</span>
                  <p>
                    <a href="#">
                      Heavy duty machinery for telecommunications infrastructure
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10">
              <div className="single-services mb-100">
                <div className="services-img">
                  <Image
                    width={200}
                    height={200}
                    src="/images/WhatsApp Image 2024-07-31 at 12.55.30 PM (1).jpeg"
                    alt="ssd"
                    className="h-[500px]"
                  />
                </div>
                <div className="services-caption">
                  <span>Telecommunication Infrastructure</span>
                  <p>
                    <a href="#">
                      Broadband Server Surveillance Units
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10">
              <div className="single-services mb-100">
                <div className="services-img">
                  <Image
                    width={500}
                    height={500}
                    src="/images/WhatsApp Image 2024-08-06 at 11.34.20 PM (2).jpeg"
                    alt="sdsd"
                    className="h-[500px]"
                  />
                </div>
                <div className="services-caption">
                  <span>Power Solutions for facilities</span>
                  <p>
                    <a href="#">
                      Clean and renewable energy for power solutions
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
