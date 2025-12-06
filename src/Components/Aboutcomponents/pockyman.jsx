import pock from "/src/assets/about/poky.png";

function Pockyman() {
  return (
    <>
      <div className="w-full bg-[#000000] py-12 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 xl:px-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 h-[600px] md:h-[700px] lg:h-[800px]">
          {/* Image Section - Mobile first */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-end items-center order-2 lg:order-1">
            <img 
              src={pock} 
              alt="Pocky" 
              className="w-[70%] md:w-[60%] lg:w-[70%] h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <h1 className="leading-none mb-4 md:mb-6">
              <span className="text-[60px] md:text-[80px] lg:text-[120px] xl:text-[152px] text-[#FFAE00] font-semibold font-[Work Sans] uppercase leading-tight">
                our{" "}
              </span>
              <span className="text-[60px] md:text-[80px] lg:text-[120px] xl:text-[152px] text-[#ffffff] font-semibold font-[Work Sans] uppercase leading-tight">
                story
              </span>
            </h1>

            <h2 className="text-[#ffffff] text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-relaxed tracking-wide max-w-2xl mx-auto lg:mx-0">
              It began with a spark. A thought. A question: "What if stories
              <br className="hidden md:block" />
              could travel?" From that spark, EtThicks came to life. Not in a
              <br className="hidden md:block" />
              boardroom. Not from a brief. But where creativity meets
              <br className="hidden md:block" />
              obsession, where curiosity refuses to be silent. Eight directions.
              Eight
              <br className="hidden md:block" />
              paths. Eight ways a story can move. That's why we chose our name:
              <br className="hidden md:block" />
              Ettuthikkum. Because a story told well never stays in one place.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pockyman;
