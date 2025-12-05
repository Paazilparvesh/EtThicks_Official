import des from "/src/assets/servone/Descriptions.png"

function Engag() {
    return (
        <>
            <div 
                style={{
                    backgroundImage: `url(${des})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    width: "100%"
                }}
                className="flex items-center"
            >
               <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
                    <h1 
                        className="text-white leading-tight mb-6"
                        style={{
                            fontFamily: "'Work Sans', sans-serif",
                            fontWeight: 500,
                            fontSize: "48px"
                        }}
                    >
                        ENGAGING CONTENT THAT <span style={{ color: '#FFB414' }}>ELEVATES YOUR BRAND</span>
                    </h1>
                    
                    <p 
                        className="text-white leading-relaxed max-w-4xl"
                        style={{
                            fontFamily: "'Onset', sans-serif",
                            fontWeight: 400,
                            fontSize: "26px"
                        }}
                    >
                        In today's digital world, high-quality content isn't optional—it's the engine that drives 
                        awareness, trust, and growth. Our Content Creation Services are designed to help your brand 
                        communicate with clarity, creativity, and impact. Whether you need compelling visuals, 
                        strategic messaging, or consistent storytelling across platforms, we bring your ideas to life 
                        with content that resonates.
                    </p>
               </div>
            </div>
        </>
    )
}

export default Engag
