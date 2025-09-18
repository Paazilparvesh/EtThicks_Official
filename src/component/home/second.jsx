import iem from "/src/assets/home/IM.png";

function Second() {
  return (
    <div className="self-stretch h-[800px] relative bg-black overflow-hidden">
      {/* Heading */}
      <div className="w-[742px] left-[349px] top-[130px] absolute text-center justify-start">
        <span className="text-white text-4xl font-normal font-['Nunito'] uppercase leading-[60px]">
          Your Brand Has a{" "}
        </span>
        <span className="text-orange-400 text-4xl font-normal font-['Nunito'] uppercase leading-[60px]">
          Story
        </span>
        <span className="text-white text-4xl font-normal font-['Nunito'] uppercase leading-[60px]">
          . We’ll Take It{" "}
        </span>
        <span className="text-orange-400 text-4xl font-normal font-['Nunito'] uppercase leading-[60px]">
          Everywhere
        </span>
      </div>

      {/* About Text */}
      <div className="w-[1251px] h-32 left-[109px] top-[285px] absolute overflow-hidden">
        <div className="w-[1192px] left-[15px] top-[17px] absolute text-center justify-start text-white text-2xl font-normal font-['Nunito'] leading-9">
          EtThicks is not just another digital agency — we're a storytelling
          powerhouse rooted in truth, trust, and transformation. Born from the
          Tamil word “Ettuthikkum”, meaning to reach in all eight directions, we
          specialize in content that carries your brand farther — emotionally,
          culturally, and commercially.
        </div>
      </div>

      {/* Paragraph Box */}
      <div
        data-property-1="Variant2"
        className="w-[520px] h-96 left-[460px] top-[462px] absolute rounded-3xl overflow-hidden"
      >
        <div className="w-[1248px] h-[640px] left-[-364px] top-[-117px] absolute bg-black/30" />
        <div className="w-[828px] h-32 left-[-154px] top-[388px] absolute overflow-hidden">
          <div className="w-[764px] left-[32px] top-[150px] absolute text-center justify-start text-white text-3xl font-normal font-['Nunito'] leading-10">
            We combine emotion-first narratives with strategy, helping brands
            break clutter, spark connection, and drive measurable growth.
          </div>
        </div>
      </div>

      {/* Small Heading */}
      <div className="w-24 h-9 left-[663px] top-[91px] absolute overflow-hidden">
        <div className="left-[10px] top-[8px] absolute text-center justify-start text-amber-500 text-lg font-bold font-['Nunito'] uppercase leading-relaxed">
          About Us
        </div>
      </div>

      {/* Image */}
      <img
        src={iem}
        alt="EtThicks"
        className="w-[400px] h-auto left-[520px] top-[620px] absolute rounded-xl shadow-lg"
      />
    </div>
  );
}

export default Second;
