import des from "/src/assets/servone/Descriptions.png";

// ---- Dynamic Content by Slug ----
const ENGAG_CONTENT = {
    "content-creation": {
        heading: "ENGAGING CONTENT THAT",
        highlight: "ELEVATES YOUR BRAND",
        description: `
        In today's digital world, high-quality content isn't optional—it's the engine that drives awareness, trust, and growth. Our Content Creation Services help your brand communicate with clarity, creativity, and impact. Whether you need compelling visuals, messaging, or storytelling, we bring your ideas to life with content that resonates.
        `,
        background: des,
    },

    "digital-marketing": {
        heading: "SMART MARKETING STRATEGIES THAT",
        highlight: "ACCELERATE YOUR GROWTH",
        description: `
        Your audience lives online—and your brand should too. Our Digital Marketing Services help you reach the right people at the right time. From social media campaigns to performance-driven ads, our strategies maximize ROI and build meaningful customer connections.
    `,
        background: des,
    },

    "brand-storytelling": {
        heading: "POWERFUL STORIES THAT",
        highlight: "DEFINE YOUR BRAND",
        description: `
        Every brand has a story—but only the right storytelling makes it memorable. We craft brand narratives that captivate your audience, create emotional impact,and differentiate your identity. Build a brand people connect with.
        `,
        background: des,
    },
};

// ---- Default fallback if slug not found ----
const DEFAULT_CONTENT = {
    heading: "PREMIUM SERVICES THAT",
    highlight: "TRANSFORM YOUR BUSINESS",
    description: `
    Explore our specialized services designed to elevate your brand with creativity,
    strategy, and innovation—tailored for business growth.
    `,
    background: des,
};

function Engag({ slug }) {
    const content = ENGAG_CONTENT[slug] || DEFAULT_CONTENT;

    return (
        <div
            style={{
                backgroundImage: `url(${content.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                width: "100%",
            }}
            className="flex items-center py-12 sm:py-16 md:py-20 lg:py-0"
        >
            <div className="container mx-auto px-6 sm:px-8 md:px-8  max-w-7xl">
                <h1
                    className="text-white leading-tight mb-4 sm:mb-5 md:mb-6 text-[28px] sm:text-[36px] md:text-[48px]"
                    style={{
                        fontFamily: "'Work Sans', sans-serif",
                        fontWeight: 500,
                    }}
                >
                    {content.heading}{" "}
                    <span style={{ color: "#FFB414" }}>{content.highlight}</span>
                </h1>

                <p
                    className="text-white leading-relaxed max-w-4xl text-[16px] sm:text-[20px] md:text-[26px] whitespace-pre-line"
                    style={{
                        fontFamily: "'Onset', sans-serif",
                        fontWeight: 400,
                    }}
                >
                    {content.description}
                </p>
            </div>
        </div>
    );
}

export default Engag;
