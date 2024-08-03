import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="slider-area ">
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7 col-md-8 mt-[-60px]">
                  <div className="hero__caption">
                    <span data-animation="fadeInLeft" data-delay=".1s" >
                      Committed to success
                    </span>
                    <h1 data-animation="fadeInLeft" data-delay=".5s">
                      DA SEO Engineering Services
                    </h1>
                    <p data-animation="fadeInLeft" data-delay=".9s">
                      
                    </p>

                    <div
                      className="hero__btn"
                      data-animation="fadeInLeft"
                      data-delay="1.1s"
                    >
                      <a href="industries.html" className="btn hero-btn">
                        Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
