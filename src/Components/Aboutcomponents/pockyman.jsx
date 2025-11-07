import pock from "/src/assets/about/poky.png";

function Pockyman() {
  return (
    <>
      <div className="flex h-[800px] w-full bg-[#000000] items-center justify-center">
        {/* Left Image Section */}
        <div className="w-[50%] flex flex-col justify-end items-center h-full">
          <img src={pock} alt="pock" className="w-[70%] object-contain" />
        </div>

        {/* Right Text Section */}
        <div className="w-[50%] flex flex-col justify-center">
          <h1 className="leading-none mb-6">
            <span className="text-[152px] text-[#FFAE00] font-semibold font-[Work Sans] uppercase">
              our{" "}
            </span>
            <span className="text-[152px] text-[#ffffff] font-semibold font-[Work Sans] uppercase">
              story
            </span>
          </h1>

          <h2 className="text-[#ffffff] text-[18px] font-normal leading-relaxed">
            It began with a spark. A thought. A question: “What if stories<br></br>
            could travel?” From that spark, EtThicks came to life. Not in a<br></br>
            boardroom. Not from a brief. But where creativity meets<br></br> obsession,
            where curiosity refuses to be silent. Eight directions. Eight<br></br> paths.
            Eight ways a story can move. That’s why we chose our name:<br></br>
            Ettuthikkum. Because a story told well never stays in one place.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Pockyman;
