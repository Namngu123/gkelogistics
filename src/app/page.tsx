// app/page.tsx

import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import PartnerSection from "@/components/sections/PartnerSection";
import BackToTopButton from "@/components/sections/BackToTopButton";


export default function Page() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PartnerSection />
      <ContactSection />
      <BackToTopButton />
      
    </>
  );
}
