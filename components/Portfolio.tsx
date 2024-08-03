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
                <span>Our Portfolios of cases</span>
                <h2>Featured Case Study</h2>
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
                    src="/images/WhatsApp Image 2024-07-31 at 12.55.32 PM (1).jpeg"
                    alt="sssas"
                    className="h-[500px]"
                  />
                </div>
                <div className="services-caption">
                  <span>Strategy planing</span>
                  <p>
                    <a href="#">
                      Within the construction industry as their overdraft
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
                    src="/images/WhatsApp Image 2024-07-31 at 12.55.35 PM (1).jpeg"
                    alt="xxcxc"
                    className="h-[500px]"
                  />
                </div>
                <div className="services-caption">
                  <span>Strategy planing</span>
                  <p>
                    <a href="#">
                      Within the construction industry as their overdraft
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
                  <span>Strategy planing</span>
                  <p>
                    <a href="#">
                      Within the construction industry as their overdraft
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
                    src="/images/WhatsApp Image 2024-07-31 at 12.55.37 PM (2).jpeg"
                    alt="sdsd"
                    className="h-[500px]"
                  />
                </div>
                <div className="services-caption">
                  <span>Strategy planing</span>
                  <p>
                    <a href="#">
                      Within the construction industry as their overdraft
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
