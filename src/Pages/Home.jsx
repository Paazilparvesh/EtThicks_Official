import Brand from "../component/home/brand";
import Core from "../component/home/core";

import Faq from "../component/home/faq";
import Get from "../component/home/get";
import Hero from "../component/home/Hero";
import Hero2 from "../component/home/Hero2";
import Mission from "../component/home/Mission";
import Second from "../component/home/second";
import Serve from "../component/home/Serve";
import Team from "../component/home/Team";

import Whyethitics from "../component/home/whyethitics";

function Home() {
  return (
    <>
      <Hero2 />

      <Serve />
      <Mission />
      <Team />
      <Second />

      <Get />
      <Faq />
      <Whyethitics />
      <Brand />
      <Core />
    </>
  );
}
export default Home;
