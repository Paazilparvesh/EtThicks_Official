import EntranceAnimation from '/src/Components/HomeComponents/EntranceAnimation.jsx'
import LandingSection from "/src/Components/HomeComponents/LandingSection.jsx"

import AboutSection from "/src/Components/HomeComponents/AboutSection.jsx";
import ServiceSection from "/src/Components/HomeComponents/ServiceSection.jsx";
import ConnectSection from "/src/Components/HomeComponents/ConnectSection.jsx"
import TeamSection from "/src/Components/HomeComponents/TeamSection.jsx"
import BlogSection from "/src/Components/HomeComponents/BlogSection.jsx";
import FaqSection from "/src/Components/HomeComponents/FaqSection.jsx";
import CTASection from "/src/Components/HomeComponents/CTASection.jsx";
import Creative from "/src/Components/HomeComponents/Creative.jsx";
import Review from "/src/Components/ServiceComponents/Review";
import Scrolling from "/src/Components/HomeComponents/Scrolling.jsx";




function HomePage() {
  return (
    <>
      <div className="relative bg-black">
        {/* Landing Overlay */}
        <EntranceAnimation />

        <LandingSection />
        <AboutSection />
        <ServiceSection />
        <ConnectSection />
        <Creative />
        <Scrolling />
        <TeamSection />
        <BlogSection />
        <Review />
        <FaqSection />
        <CTASection />

      </div>
    </>
  );
}

export default HomePage;
