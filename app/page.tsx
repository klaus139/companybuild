import ContactBanner from "@/components/ContactBanner";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { aboutData } from "@/constants";
import Guide from "@/components/Guide";
import Services from "@/components/Services";
import HeroSection from "@/components/HeroSection";
import Category from "@/components/Category";
import TopServices from "@/components/TopServices";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div className="">
    <Navbar />
    <main>
      <HeroSection />
      <Category />
      <TopServices />
      <Portfolio />
      <Testimonial />
      {/* <CountDown /> */}
      <Gallery />
      <Careers />


    </main>
    <Footer />
    {/* <Hero />
    <ContactBanner data={aboutData}/>
    <Guide />
    <Services /> */}
    
   </div>
  );
}
