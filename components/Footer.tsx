"use client"
import Image from 'next/image';
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer>
        <div className="footer-area section-bg" data-background="assets/img/gallery/footer_bg.jpg">
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-logo">
                      <a href="/">
                      {/* <Image
              src="/images/logopreview.png"
              className="object-contain"
              height={100}
              width={100}
              alt="Logo"
            /> */}
                        <h1 className='text-white'>DA SEO Engineering Service</h1>
                      </a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p className="info1">Our contact details are highlighted below, as follows: </p>
                      </div>
                    </div>
                    <div className="footer-number">
                      <h4><span>+234 </span>703 107 0581</h4>
                      <h4><span>+234 </span>703 501 3336 </h4>
                     
                     
                      <p>
                        <a href="mailto:[email protected]" className="__cf_email__">
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Location</h4>
                      <p className='text-gray-400'>Head Office: SUITE 302, SECOND FLOOR, AIRPORT BUSINESS HUB, ALONG MURTALA MOHAMMED INTERNATIONAL AIRPORT, IKEJA, LAGOS STATE.</p>
                      
                     <p>Regional Office: Km 10 Benin-Lagos road, Iguosa. Benin city, Edo state</p>
                    </div>
                  </div>
                </div>
               
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Explore</h4>
                      <ul>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Properties</a></li>
                        <li><a href="#">Licenses</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Location</h4>
                      <div className="footer-pera">
                        <p className="info1">Subscribe now to get daily updates</p>
                      </div>
                    </div>

                    <div className="footer-form">
                      <div id="mc_embed_signup">
                        <form
                          target="_blank"
                          action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                          method="get"
                          className="subscribe_form relative mail_part"
                          noValidate
                        >
                          <input
                            type="email"
                            name="EMAIL"
                            id="newsletter-form-email"
                            placeholder="Email Address"
                            className="placeholder hide-on-focus"
                            onFocus={(e) => (e.target.placeholder = '')}
                            onBlur={(e) => (e.target.placeholder = 'Your email address')}
                          />
                          <div className="form-icon">
                            <button
                              type="submit"
                              name="submit"
                              id="newsletter-submit"
                              className="email_icon newsletter-submit button-contactForm"
                            >
                              SIGN UP
                            </button>
                          </div>
                          <div className="mt-10 info"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-9 col-lg-8">
                  <div className="footer-copy-right">
                    <p>
                      Copyright &copy; {currentYear} All rights reserved | This template is made with{' '}
                      <i className="fa fa-heart" aria-hidden="true"></i> by{' '}
                      <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                        Colorlib
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <div className="footer-social f-right">
                    <a href="#"><FaTwitter /></a>
                    <a href="https://www.facebook.com/sai4ull"><FaFacebookF /></a>
                    <a href="#"><FaGlobe /></a>
                    <a href="#"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
