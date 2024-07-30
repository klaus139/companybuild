import ContactBanner from "@/components/ContactBanner";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { aboutData } from "@/constants";

export default function Home() {
  return (
   <div className="">
    <Navbar />
    <Hero />
    <ContactBanner data={aboutData}/>
    
   </div>
  );
}
