// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "/src/LayOut/Header.jsx";
import Footer from "/src/LayOut/Footer.jsx";
import HomePage from "/src/Pages/HomePage.jsx";
import AboutPage from "/src/Pages/AboutPage.jsx";
import ContactPage from "/src/Pages/ContactPage.jsx";
import BlogPage from "/src/Pages/BlogPages/BlogPage.jsx";
import InnerBlog from "/src/Pages/BlogPages/InnerBlog.jsx";
import ServiceMain from "./Pages/ServicePages/ServiceMain";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<InnerBlog />} />
        
        {/* Service Routes - Use key prop to force re-render */}
        <Route path="/service/:id" element={<ServiceMain key="serviceById" />} />
        <Route path="/Service1" element={<ServiceMain key="service1" />} />
        <Route path="/Service2" element={<ServiceMain key="service2" />} />
        <Route path="/Service3" element={<ServiceMain key="service3" />} />
        <Route path="/Service4" element={<ServiceMain key="service4" />} />
        <Route path="/Service5" element={<ServiceMain key="service5" />} />
        <Route path="/Service6" element={<ServiceMain key="service6" />} />
        <Route path="/Service7" element={<ServiceMain key="service7" />} />
        
        {/* Fallback */}
        <Route path="*" element={
          <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
              <a href="/" className="text-cyan-400 hover:text-cyan-300 underline text-xl">
                Return to Homepage
              </a>
            </div>
          </div>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;