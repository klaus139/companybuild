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
                    src="/images/mast1.jpeg"
                    alt="sssas"
                    className="h-[500px]"
                  />
                </div>
                <div className="services-caption">
                  <span>Telecommunications Solutions</span>
                  <p>
                    <a href="#">
                      High Rise Transmissions
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
                    src="/images/mast2.jpeg"
                    alt="xxcxc"
                    className="h-[500px]"
                  />
                </div>
                <div className="services-caption">
                  <span>Secure Commnunications Solutions</span>
                  <p>
                    <a href="#">
                      We specialize in telecommunications infrastructure
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
                    src="/images/gen1.jpeg"
                    alt="ssd"
                    className="h-[500px]"
                  />
                </div>
                <div className="services-caption">
                  <span>Generator Maintenance</span>
                  <p>
                    <a href="#">
                     We install and maintain energy facilities
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
                    src="/images/gen4.jpeg"
                    alt="sdsd"
                    className="h-[500px]"
                  />
                </div>
                <div className="services-caption">
                  <span>Power Efficiency</span>
                  <p>
                    <a href="#">
                      We can build network and efficient power grids.
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
