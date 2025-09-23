import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Layout/Header.jsx";
import Footer from "./Layout/Footer.jsx";

import HomePage from "/src/Pages/HomePage.jsx";
import AboutPage from "/src/Pages/AboutPage.jsx";
import ContactPage from "/src/Pages/ContactPage.jsx";

import BlogPage from "/src/Pages/BlogPages/BlogPage.jsx";
import InnerBlog from "/src/Pages/BlogPages/InnerBlog.jsx";

import Service1 from "./Pages/ServicePages/Service1";
import Service2 from "./Pages/ServicePages/Service2";
import Service3 from "./Pages/ServicePages/Service3";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>

         <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/blog/:id" element={<InnerBlog />}></Route>


          <Route path="/service1" element={<Service1 />}></Route>
          <Route path="/service2" element={<Service2 />}></Route>
          <Route path="/service3" element={<Service3 />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
