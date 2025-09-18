import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs";
import Blogs from "./Pages/Blogs";
import Contactus from "./Pages/Contactus";
import Service1 from "./Pages/ServicePages/Service1";
import Service2 from "./Pages/ServicePages/Service2";
import Service3 from "./Pages/ServicePages/Service3";
import InnerBlog from "./Pages/InnerBlog";
import Header from "/src/LayOut/Header.jsx";
import Footer from "/src/LayOut/Footer.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
          <Route path="/Contact" element={<Contactus />}></Route>
          <Route path="/service1" element={<Service1 />}></Route>
          <Route path="/service2" element={<Service2 />}></Route>
          <Route path="/service3" element={<Service3 />}></Route>
          <Route path="/innerblog" element={<InnerBlog />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <div className="text-red-600">hi</div> */}
    </>
  );
}

export default App;
