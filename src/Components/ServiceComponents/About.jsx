// import des from "/src/assets/Descriptions.png";
// import dig from "/src/assets/about/Digital Marketingg.png";
// import overhead from "/src/assets/overhead.png";
// import Digtal from "/src/assets/Digital.png"; 
// import Brand from "/src/assets/Brand.png";
// import Description from "/src/assets/Descriptions.png";
// import LeadGen from "/src/assets/Lead Generation.png";
// import ProductPhoto from "/src/assets/Product Photography.png";
// import PersonalBranding from "/src/assets/PersonalBranding.png";
// import TvCommercial from "/src/assets/Tvcommercial.png";

// const ENGAG_CONTENT = {
//     "content-creation": {
//         heading: "ENGAGING CONTENT THAT",
//         highlight: "ELEVATES YOUR BRAND",
//         description: `In today’s digital world, high-quality content isn’t optional—it’s the engine that drives awareness, trust, and growth. Our Content Creation Services are designed to help your brand communicate with clarity, creativity, and impact. Whether you need compelling visuals, strategic messaging, or consistent storytelling across platforms, we bring your ideas to life with content that resonates.`,
    
//         background: overhead,
//     },

//     "digital-marketing": {
//         heading: "Grow Faster With ",
//         highlight: " Data-Driven Digital Marketing",
//         description: `Your customers are online—and your brand should be too. Our Digital Marketing Services help you reach the right audience, increase visibility, and convert clicks into loyal customers. With a strategic, results-focused approach, we blend creativity and analytics to elevate your brand in a competitive digital landscape.`,
//         background: Digtal,
//     },

//     "brand-storytelling": {
//         heading: "Transform Your Brand Into a .",
//         highlight: "Story People Care About.",
//         description: `Great brands don’t just sell products—they inspire, connect, and stay remembered. Our Brand Storytelling service helps you uncover the heart of your business and communicate it in a way that builds trust, emotion, and loyalty. We craft stories that spark connection and turn audiences into lifelong advocates.`,
//         background: Brand,
//     },
//     "social-media-management": {
//         heading: "Grow Your Presence. Engage Your Audience.",
//         highlight: " Strengthen Your Brand.",
//         description: `Your personal brand is more than an online presence — it’s your reputation, your influence, and the story that sets you apart. Our Personal Branding Services help entrepreneurs, creators, coaches, and industry professionals build a magnetic identity that attracts opportunities, grows trust, and communicates expertise with clarity and confidence.`,
//         background: Description,
//     },
//     "lead-generation": {
//         heading: "Fuel Your Sales Pipeline With .",
//         highlight: " High-Quality Leads.",
//         description: `Your business can’t grow without a steady flow of potential customers. Our Lead Generation services are designed to attract, engage, and convert the right prospects—so your sales team spends less time chasing and more time closing.`,

//         background: LeadGen,
//     },
//     "product-photography": {
//         heading: " With Stunning, Professional Visuals.",
//         highlight: " Showcase Your Products.",
//         description: `Your products deserve to be seen in the best light—literally. Our Product Photography services help you capture high-quality, eye-catching visuals that highlight the details, craftsmanship, and value of your brand. Whether for e-commerce, social media, ads, or print, we deliver images that elevate perception and drive sales.`,

//         background: ProductPhoto,
//     },
    
// };

// // ---- Default fallback if slug not found ----
// const DEFAULT_CONTENT = {
//     heading: "PREMIUM SERVICES THAT",
//     highlight: "TRANSFORM YOUR BUSINESS",
//     description: `
//     Explore our specialized services designed to elevate your brand with creativity,
//     strategy, and innovation—tailored for business growth.
//     `,
//     background: des,
// };

// function Engag({ slug }) {
//     const content = ENGAG_CONTENT[slug] || DEFAULT_CONTENT;

//     return (
//         <div
//             style={{
//                 backgroundImage: `url(${content.background})`,
//                 // backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 imageRepeat: "no-repeat",
//                 width: "100%",
//             }}
//             // className="flex items-center py-20 sm:py-16 md:py-20 lg:py-0 md:min-h-screen bg-cover bg-bottom-right "
//             className="
//   flex items-center
//   py-14 sm:py-12 md:py-10
//   min-h-[60vh] md:min-h-[70vh]
//   bg-cover bg-bottom-right
// "
//         >
//             <div className=" px-6 md:px-8">
//                 <h1
//                     className="text-white font-medium text-center md:text-start leading-tight tracking-wider mb-4 sm:mb-5 md:mb-0 text-[28px] md:text-4xl lg:text-5xl font-worksans"
//                 >
//                     {content.heading}{" "} <br className="hidden xl:block " />
//                     <span style={{ color: "#FFB414" }}>{content.highlight}</span>
//                 </h1>

//                 <p
//                     className="text-white text-center md:text-start leading-relaxed max-w-4xl tracking-wider text-xl md:text-lg xl:text-xl whitespace-pre-line font-nunito"
//                 >
//                     {content.description}
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Engag;
// import overhead from "/src/assets/overhead.png";





import des from "/src/assets/Descriptions.png";
import Digtal from "/src/assets/Digital.png"; 
import Brand from "/src/assets/Brand.png";
import Social from "/src/assets/Social.png";
import LeadGen from "/src/assets/Lead Generation.png";
import ProductPhoto from "/src/assets/Product Photography.png";
import PersonalBranding from "/src/assets/PersonalBranding.png";
import TvCommercial from "/src/assets/Tvcommercial.png";
import Influence from "/src/assets/influnceer.png";

const ENGAG_CONTENT = {
  "content-creation": {
    heading: "ENGAGING CONTENT THAT ELEVATES",
    highlight: " YOUR BRAND",
    description: `In today's digital world, high-quality content isn't optional—it's the engine that drives awareness, trust, and growth. Our Content Creation Services are designed to help your brand communicate with clarity, creativity, and impact. Whether you need compelling visuals, strategic messaging, or consistent storytelling across platforms, we bring your ideas to life with content that resonates.`,
    background: des,
  },

  "digital-marketing": {
    heading: "Grow Faster With ",
    highlight: " Data-Driven Digital Marketing",
    description: `Your customers are online—and your brand should be too. Our Digital Marketing Services help you reach the right audience, increase visibility, and convert clicks into loyal customers. With a strategic, results-focused approach, we blend creativity and analytics to elevate your brand in a competitive digital landscape.`,
    background: Digtal,
  },

  "brand-storytelling": {
    heading: "Transform Your Brand Into a .",
    highlight: "Story People Care About.",
    description: `Great brands don't just sell products—they inspire, connect, and stay remembered. Our Brand Storytelling service helps you uncover the heart of your business and communicate it in a way that builds trust, emotion, and loyalty. We craft stories that spark connection and turn audiences into lifelong advocates.`,
    background: Brand,
  },

  "social-media-management": {
    heading: "Grow Your Presence. Engage Your Audience.",
    highlight: " Strengthen Your Brand.",
    description: `Your personal brand is more than an online presence — it's your reputation, your influence, and the story that sets you apart. Our Personal Branding Services help entrepreneurs, creators, coaches, and industry professionals build a magnetic identity that attracts opportunities, grows trust, and communicates expertise with clarity and confidence.`,
    background: Social,
  },

  "lead-generation": {
    heading: "Fuel Your Sales Pipeline With .",
    highlight: " High-Quality Leads.",
    description: `Your business can't grow without a steady flow of potential customers. Our Lead Generation services are designed to attract, engage, and convert the right prospects—so your sales team spends less time chasing and more time closing.`,
    background: LeadGen,
  },

  "product-photography": {
    heading: " With Stunning, Professional Visuals.",
    highlight: " Showcase Your Products.",
    description: `Your products deserve to be seen in the best light—literally. Our Product Photography services help you capture high-quality, eye-catching visuals that highlight the details, craftsmanship, and value of your brand. Whether for e-commerce, social media, ads, or print, we deliver images that elevate perception and drive sales.`,
    background: ProductPhoto,
  },

  "personal-branding": {
    heading: "Build a Magnetic Personal Brand That",
    
    highlight: " Attracts Opportunities",
    description: `Your personal brand is more than an online presence — it's your reputation, your influence, and the story that sets you apart. Our Personal Branding Services help entrepreneurs, creators, coaches, and industry professionals build a magnetic identity that attracts opportunities, grows trust, and communicates expertise with clarity and confidence.`,
    background: PersonalBranding,
  },

  "tv-commercials": {
    heading: "Create Impactful",
    highlight: " TV Commercials",
    description: `From concept to execution, we create TV commercials that connect emotionally and build brand recall.`,
    background: TvCommercial,
  },

  "influencer-marketing": {
    heading: "Leverage Trust & Reach with",
    highlight: " Strategic Influencer Marketing",
    description: `Tap into established audiences and authentic voices that align with your brand values. Our Influencer Marketing services connect you with the right creators to build credibility, drive engagement, and amplify your message through trusted recommendations that convert.`,
    background: Influence,
  },
};

function Engag({ slug }) {
  const normalizedSlug = slug?.toLowerCase().trim();
  const content = ENGAG_CONTENT[normalizedSlug];

  // ❌ No default content (Landing maathiri)
  if (!content) return null;

  return (
    <div
      style={{
        backgroundImage: `url(${content.background})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="
        flex items-center
        py-14 sm:py-12 md:py-10
        min-h-[60vh] md:min-h-[70vh]
        bg-cover bg-bottom-right
      "
    >
      <div className="px-6 md:px-8">
        <h1
          className="
            text-white font-medium
            text-center md:text-start
            leading-tight tracking-wider
            mb-4 sm:mb-5 md:mb-0
            text-[28px] md:text-4xl lg:text-5xl
            font-worksans
          "
        >
          {content.heading}
          <br className="hidden xl:block" />
          <span style={{ color: "#FFB414" }}>
            {content.highlight}
          </span>
        </h1>

        <p
          className=" pt-5
            text-white
            text-center md:text-start
            leading-relaxed
            max-w-4xl
            tracking-wider
            text-xl md:text-lg xl:text-xl
            whitespace-pre-line
            font-nunito
          "
        >
          {content.description}
        </p>
      </div>
    </div>
  );
}

export default Engag;