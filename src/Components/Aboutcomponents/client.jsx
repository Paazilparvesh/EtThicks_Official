import image1 from "/src/assets/about/Android Robo.png";
import image2 from "/src/assets/about/Concept Studio Logo.png";
import image3 from "/src/assets/about/TLG logo.png";
import image4 from "/src/assets/about/CBL Logo.png";
import image5 from "/src/assets/about/Abi estates.png";
import image6 from "/src/assets/about/department.png";
import image7 from "/src/assets/about/nithiya.png";
import image8 from "/src/assets/about/TNRTP.png";
import image9 from "/src/assets/about/CHAI Main logo.png";
import image10 from "/src/assets/about/ZoomFarms Logo.png";
import image11 from "/src/assets/about/alayam selveer.png";

const slides = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];

// Reusable Row Component
const CarouselRow = ({ reverse = false, duration = 14 }) => {
  return (
    <div className="relative w-full overflow-hidden my-4">
      {/* Gradient Fade on both sides */}
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black to-transparent z-20 pointer-events-none"></div>

      {/* Animated Scrolling Row */}
      <div
        className="flex items-center"
        style={{
          width: `${slides.length * 2 * 12}rem`,
          animation: `${reverse ? "reverseScroll" : "scroll"} ${duration}s linear infinite`,
        }}
      >
        {slides.concat(slides).map((img, idx) => (
          <div
            key={idx}
            className="shrink-0 size-28 md:size-20 lg:size-40 mx-6 flex justify-center items-center group"
          >
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`client-${idx}`}
                className="w-full h-full object-contain object-center filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Client() {
  return (
    <>
      <div className="bg-[#000000]  text-white py-12 relative">
        <h1 className="text-[#FFAE00] text-center font-medium text-[56px] mb-8 font-worksans">
          Clients
        </h1>

        {/* Animated Rows */}
        <CarouselRow duration={12} />
        <CarouselRow reverse={true} duration={14} />

        {/* <div
          className="slider"
          style={{
            "--position": 1,
            "--width": "30vw",
            "--height": "12vh",
            "--quantity": 10,
            "--time": "14s",
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <img src={image1} alt="" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src={image2} alt="" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src={image3} alt="" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src={image4} alt="" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src={image5} alt="" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src={image6} alt="" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src={image7} alt="" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src={image8} alt="" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src={image9} alt="" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img src={image10} alt="" />
            </div>
          </div>
        </div>
        <div
          className="slider"
          reverse="true"
          style={{
            "--position": 1,
            "--width": "30vw",
            "--height": "12vh",
            "--quantity": 10,
            "--time": "14s",
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <img src={image1} alt="" className="w-full h-auto" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src={image2} alt="" className="w-full h-auto" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src={image3} alt="" className="w-full h-auto" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src={image4} alt="" className="w-full h-auto" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src={image5} alt="" className="w-full h-auto" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src={image6} alt="" className="w-full h-auto" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src={image7} alt="" className="w-full h-auto" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src={image8} alt="" className="w-full h-auto" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src={image9} alt="" className="w-full h-auto" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img src={image10} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div> */}

        {/* Keyframe Animations */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes reverseScroll {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </div>
    </>
  );
}

export default Client;
