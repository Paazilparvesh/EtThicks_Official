import teg from "/src/assets/home/icon2.png";

function Get() {
  return (
    <>
      <div className="self-stretch h-[623px] relative bg-black overflow-hidden">
        {/* Icon box */}
        <div className="w-28 h-28 left-[660px] top-[78px] absolute bg-amber-500 rounded-[32px] shadow-[0px_-3px_5px_0px_rgba(255,174,0,0.09)] shadow-[0px_12px_13px_0px_rgba(255,174,0,0.17)] shadow-[0px_4px_6px_0px_rgba(255,174,0,0.12)] shadow-[0px_-12px_30px_0px_rgba(255,174,0,0.12)] shadow-[0px_54px_55px_0px_rgba(255,174,0,0.25)]">
          <div className="w-20 h-20 left-[20px] top-[20px] absolute overflow-hidden">
            <img src={teg} alt="icon" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Heading */}
        <div className="left-[426px] top-[218px] absolute text-white text-8xl font-medium font-['Nunito'] leading-[168px]">
          Get Started
        </div>

        {/* Input box */}
        <div className="w-96 h-14 left-[473px] top-[467px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-amber-500 overflow-hidden flex items-center px-5">
          <span className="text-neutral-500 text-2xl font-medium font-['Nunito'] leading-9">
            Enter Your E-mail
          </span>
        </div>

        {/* Send button */}
        <div className="px-4 py-2.5 left-[878px] top-[467px] absolute bg-amber-500 rounded-3xl inline-flex justify-center items-center gap-2.5 cursor-pointer hover:bg-amber-600 transition">
          <div className="text-white text-2xl font-medium font-['Nunito'] leading-9">
            Send
          </div>
        </div>

        {/* Description */}
        <div className="w-[610px] left-[415px] top-[373px] absolute text-center text-neutral-500 text-xl font-medium font-['Nunito'] leading-loose">
          Reach out today — we’d love to hear your story and explore how
          design can amplify your message.
        </div>
      </div>
    </>
  );
}

export default Get;
