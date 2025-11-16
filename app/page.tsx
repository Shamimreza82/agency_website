
import Hero from "@/components/home/Hero";
import "locomotive-scroll/dist/locomotive-scroll.css";
import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/layout/Footer";
import LocoWrapper from "@/components/LocoWrapper";
import WhatsAppButton from "@/components/home/WhatsAppButton";



export default function Home() {





  return (
    <>
      <LocoWrapper>
        <Hero />
        <AboutUs />
        <Footer />
      </LocoWrapper>
    </>
  );
}
