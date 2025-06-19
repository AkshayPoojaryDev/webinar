import React from "react";
import Navbar from "./components/Layout/Navbar";
import HeroSection from "./Page/Home/Sections/HeroSection";
import LearnSection from "./Page/Home/Sections/LearnSection";
import EngagementSection from "./Page/Home/Sections/EngagementSection";
import VideoPlatformCards from "./Page/Home/Sections/VideoPlatformCards";

export default function WebinarLandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LearnSection />
      <EngagementSection />
      <VideoPlatformCards/>
      {/* ⟶ Add more sections (Hosts, Pricing, etc.) here */}
    </>
  );
}
