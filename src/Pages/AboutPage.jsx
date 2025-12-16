import Count from '/src/Components/Aboutcomponents/count'
import OurStory from '/src/Components/Aboutcomponents/OurStory'
import AboutSection from '/src/Components/Aboutcomponents/AboutSection'
import Client from '/src/Components/Aboutcomponents/Client'
import TeamSection from "/src/Components/HomeComponents/TeamSection.jsx"
import QuoteSection from "/src/Components/HomeComponents/QuoteSection.jsx";
import CTASection from "/src/Components/HomeComponents/CTASection.jsx";
import Abouthead from '/src/Components/Aboutcomponents/Abouthead.jsx'
import Pack from '/src/Components/Aboutcomponents/Pack.jsx'


const AboutPage = () => {
  return (
    <>
      {/* <Pack /> */}
      {/* <Abouthead /> */}
      {/* <Count /> */}
      <OurStory />
      <AboutSection />

      <Client />

      <TeamSection />
      <QuoteSection />
      <CTASection />
    </>
  )
}

export default AboutPage