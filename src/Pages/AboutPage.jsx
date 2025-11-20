import React from 'react'
import Count from '../Components/Aboutcomponents/count'
import Pockyman from '../Components/Aboutcomponents/pockyman'
import Create from '../Components/Aboutcomponents/create'
import Client from '../Components/Aboutcomponents/client'
import TeamSection from "/src/Components/HomeComponents/TeamSection.jsx"
import QuoteSection from "/src/Components/HomeComponents/QuoteSection.jsx";
import CTASection from "/src/Components/HomeComponents/CTASection.jsx";
const AboutPage = () => {
  return (
    <>
    <Count/>
    <Pockyman/>
    <Create/>
    <Client/>
    <TeamSection />
    <QuoteSection />
     <CTASection />
    </>
  )
}

export default AboutPage