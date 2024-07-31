import React from "react";

const Careers = () => {
  return (
    <div>
      <section
        className="wantToWork-area w-padding2 section-bg"
        style={{ backgroundImage: 'url("/images/section_bg03.jpg.webp")' }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7 col-lg-9 col-md-8">
              <div className="wantToWork-caption wantToWork-caption2">
                <h2>
                  Are you Interested
                  <br /> In working with us?
                </h2>
                <p>Check out our careers page</p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4">
              <a href="#" className="btn btn-black f-right">
                Careers
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
