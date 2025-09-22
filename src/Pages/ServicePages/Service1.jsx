
import React from "react";

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-16 px-6">
 
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="text-gray-300 mt-2">
          We offer a range of content services tailored to your
          brand’s voice and business goals.
        </p>
      </div>

    
      <div className="max-w-4xl mx-auto mb-20">
        <div className="text-left w-full md:w-2/3">
          <h3 className="text-yellow-400 text-xl font-semibold">
            Website Copywriting
          </h3>
          <p className="text-gray-300 mt-2">
            Persuasive, brand-aligned content for your homepage,
            about page, services, and more.
          </p>
          <div className="bg-gray-300 h-48 w-full mt-4 rounded-md"></div>
        </div>
      </div>

     
      <div className="max-w-4xl mx-auto mb-20 flex justify-end">
        <div className="text-right w-full md:w-2/3">
          <h3 className="text-yellow-400 text-xl font-semibold">
           Blog & Article Writing
          </h3>
          <p className="text-gray-300 mt-2">
           SEO-optimized, informative blog content that positions you as an authority and boosts traffic.
          </p>
          <div className="bg-gray-300 h-48 w-full mt-4 rounded-md ml-auto"></div>
        </div>

       </div>


      <div className="max-w-4xl mx-auto mb-20">
        <div className="text-left w-full md:w-2/3">
          <h3 className="text-yellow-400 text-xl font-semibold">
          Social Media Content
          </h3>
          <p className="text-gray-300 mt-2">
            Captions, campaigns, and content calendars crafted to grow your audience and drive engagement.
          </p>
          <div className="bg-gray-300 h-48 w-full mt-4 rounded-md"></div>
        </div>
      </div>



      <div className="max-w-4xl mx-auto mb-20 flex justify-end">
        <div className="text-right w-full md:w-2/3">
          <h3 className="text-yellow-400 text-xl font-semibold">
            Product Descriptions
          </h3>
          <p className="text-gray-300 mt-2">
            Clear, compelling, and benefit-driven copy that drives conversions
          </p>
          <div className="bg-gray-300 h-48 w-full mt-4 rounded-md ml-auto"></div>
        </div>

       </div>
      <div className="max-w-4xl mx-auto mb-20">
        <div className="text-left w-full md:w-2/3">
          <h3 className="text-yellow-400 text-xl font-semibold">
           Email Copy & Newsletters
          </h3>
          <p className="text-gray-300 mt-2">
          Nurture your leads and build loyalty with well-written, high-converting email content
          </p>
          <div className="bg-gray-300 h-48 w-full mt-4 rounded-md"></div>

        </div>
         <div className="max-w-4xl mx-auto mb-20 flex justify-end">
        <div className="text-right w-full md:w-2/3">
          <h3 className="text-yellow-400 text-xl font-semibold">
           Content Strategy Consulting
          </h3>
          <p className="text-gray-300 mt-2">
           Need help deciding what content to create and when? We’ll guide you with a solid plan
          </p>
          <div className="bg-gray-300 h-48 w-full mt-4 rounded-md ml-auto"></div>
        </div>

       </div>
      </div>


      
    </section>
  );
}
