import React from "react";
import { UtilityPole, GlobeLock, Cog } from "lucide-react";
const Category = () => {
  return (
    <div>
      <div className="categories-area section-padding30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle mb-70">
                <span>Our Range of Services</span>
                <h2>Our Best Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-development"></span>
                </div>
                <div className="cat-cap h-[400px] object-contain overflow-hidden">
                  <div className="flex flex-col mx-auto items-center justify-center">
                    <UtilityPole className="text-[50px] text-blue-900 h-[90px] w-[90px]" />
                  </div>
                  <h5>Installation & Maintenance of Site Facilities </h5>
                  <p>
                    provides Network and Operations Quality Assurance, Technical
                    Audits Process Development & Implementation, Network
                    Planning and Optimization, Network
                    Implementation Services covering Switching, Radio, and VAS
                    Transmission Planning, Installation, and Maintenance
                    Services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-result"></span>
                </div>
                <div className="cat-cap">
                  <div className="flex flex-col mx-auto items-center justify-center">
                    <GlobeLock className="text-[50px] text-blue-900 h-[90px] w-[90px]" />
                  </div>
                  <h5>Heavy Machine Maintenance</h5>
                  <p>
                    nstallation & Maintenance of all AC Passive Equipment AC
                    Generators, Air Conditioning Units, Grid Power, Automatic
                    Transfer Switch, ATS, Automatic Voltage Regulator, AVR, etc.
                    • Installation & Maintenance of DC Power Equipment DC
                    Generators, Solar, Hybrids, Rectifier System, Back Up
                    Batteries, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-team"></span>
                </div>
                <div className="cat-cap h-[400px]">
                  <div className="flex flex-col mx-auto items-center justify-center">
                    <Cog className="text-[50px] text-blue-900 h-[90px] w-[90px]" />
                  </div>
                  <h5>Procurement and Supply</h5>
                  <p>
                    Monthly Diesel Supply to site • Supply of AC/ DC Generators
                    • Supply of Back Up Batteries • Rectifiers & Air
                    Conditioners. • Transformers, AVR, ATS, Energy Meter Board •
                    Solar Power Equipment.
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

export default Category;
