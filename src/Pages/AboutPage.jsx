import Count from '../Components/Aboutcomponents/count'
import Pockyman from '../Components/Aboutcomponents/pockyman'
import Create from '../Components/Aboutcomponents/create'
import Client from '../Components/Aboutcomponents/client'
import TeamSection from "/src/Components/HomeComponents/TeamSection.jsx"
import QuoteSection from "/src/Components/HomeComponents/QuoteSection.jsx";
import CTASection from "/src/Components/HomeComponents/CTASection.jsx";
import Abouthead from '/src/Components/Aboutcomponents/Abouthead.jsx'
import Pack from '../Components/Aboutcomponents/pack'


const AboutPage = () => {
  return (
    <>
    <Pack/>
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