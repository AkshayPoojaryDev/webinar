import React from "react";
import Navbar from "./Layout/Navbar";
import HeroSection from "./Page/Home/Sections/HeroSection";
import LearnSection from "./Page/Home/Sections/LearnSection";
import EngagementSection from "./Page/Home/Sections/EngagementSection";
import VideoPlatformCards from "./Page/Home/Sections/VideoPlatformCards";
import Footer from "./Layout/Footer";

export default function WebinarLandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LearnSection />
      <EngagementSection />
      <VideoPlatformCards/>
      <Footer/>
      {/* ⟶ Add more sections (Hosts, Pricing, etc.) here */}
    </>
  );
}
