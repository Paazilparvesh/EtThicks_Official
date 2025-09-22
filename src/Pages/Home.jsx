// import Blog from "/src/component/home/Blog.jsx";
// import Brand from "../component/home/brand";
// import Core from "../component/home/core";
import Faq from "../component/home/Faq";
import Get from "../component/home/Get";
import Hero2 from "../component/home/Hero2";
import Whyethitics from "../component/home/Whyethitics";
import Person from "../component/home/Person";
import Serve from "../component/home/Serve";
import Team from "/src/component/home/Team.jsx"
import Mission from "/src/component/home/Mission.jsx"
import Second from "../component/home/Second";


function Home() {
  return (
    <>

      <Hero2 />
      <Second />
      <Serve />
      <Mission />
      <Team />
      <Person />
      <Whyethitics />
      {/* <Blog /> */}
      <Faq />
      {/* <Brand />
      <Core /> */}
      <Get />
    </>
  );
}

export default Home;
