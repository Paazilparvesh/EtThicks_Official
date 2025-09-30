import HeroSection from "/src/Components/HomeComponents/HeroSection.jsx";
import AboutSection from "/src/Components/HomeComponents/AboutSection.jsx";
import ServiceSection from "/src/Components/HomeComponents/ServiceSection.jsx";
import ConnectSection from "/src/Components/HomeComponents/ConnectSection.jsx"
import TeamSection from "/src/Components/HomeComponents/TeamSection.jsx"
import BrandSection from "/src/Components/HomeComponents/BrandSection.jsx";
import QuoteSection from "/src/Components/HomeComponents/QuoteSection.jsx";
import BlogSection from "/src/Components/HomeComponents/BlogSection.jsx";
import FaqSection from "/src/Components/HomeComponents/FaqSection.jsx";
// import BrandSection2 from "/src/Components/HomeComponents/BrandSection2.jsx";
// import ValueSection from "/src/Components/HomeComponents/ValueSection.jsx";
import CTASection from "/src/Components/HomeComponents/CTASection.jsx";


function HomePage() {
  return (
    <>
    <div className="bg-black">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      
      <ConnectSection />

      <TeamSection />
      <BrandSection />
      <QuoteSection />
      
      <BlogSection />
      <FaqSection />
      {/* <BrandSection2 />
      <ValueSection /> */}
      <CTASection />
      </div>
    </>
  );
}

export default HomePage;
