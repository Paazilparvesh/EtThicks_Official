import Count from '/src/Components/Aboutcomponents/count'
import Pockyman from '/src/Components/Aboutcomponents/pockyman'
import Create from '/src/Components/Aboutcomponents/create'
import Client from '/src/Components/Aboutcomponents/client'
import TeamSection from "/src/Components/HomeComponents/TeamSection.jsx"
import QuoteSection from "/src/Components/HomeComponents/QuoteSection.jsx";
import CTASection from "/src/Components/HomeComponents/CTASection.jsx";
import Abouthead from '/src/Components/Aboutcomponents/Abouthead.jsx'
import Pack from '/src/Components/Aboutcomponents/Pack.jsx'


const AboutPage = () => {
  return (
    <>
      <Pack />
      <Abouthead />
      <Count />
      <Pockyman />
      <Create />
      <Client />
      <TeamSection />
      <QuoteSection />
      <CTASection />
    </>
  )
}

export default AboutPage