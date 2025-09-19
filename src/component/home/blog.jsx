import ima from "/src/assets/home/img1.png";
import imy from "/src/assets/home/grape.png";
import imr from "/src/assets/home/pad.png";
import ino from "/src/assets/home/note.png";

function Blog() {
  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden px-12 py-16">
      {/* Glowing background circle */}
      <div className="w-[747px] h-[747px] left-[346px] top-[379px] absolute bg-cyan-500 rounded-full blur-[600px] -z-10" />

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Content */}
        <div className="flex-1">
          {/* Blog Heading with amber overlay */}
          <div className="relative">
            <h1 className="text-white text-[160px] font-medium font-['Work_Sans'] uppercase leading-none">
              Blog
            </h1>
            <span className="absolute top-0 left-0 text-amber-500 text-[160px] font-medium font-['Work_Sans'] uppercase leading-none overflow-hidden h-[60px]">
              Blog
            </span>
          </div>

          {/* Subheading Number */}
          <p className="text-white/20 text-9xl font-medium font-['Work_Sans'] uppercase mt-2">
            01
          </p>

          {/* Blog Title */}
          <h2 className="text-white text-3xl font-medium font-['Work_Sans'] mt-6">
            Why Quality Content is Still King in 2025
          </h2>

          {/* Blog Description */}
          <p className="text-white text-xl font-normal font-['Work_Sans'] leading-loose mt-4 max-w-2xl">
            Explore why high-quality, authentic content continues to outperform
            clickbait and AI-generated fluff. This post can include insights
            into Google’s evolving algorithm{" "}
            <span className="text-amber-500 underline">More</span>
          </p>
        </div>

        {/* Right Image */}
        <div className="w-[499px] h-96 bg-black/20 rounded-2xl overflow-hidden">
          <img
            src={ima}
            alt="Main blog"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Bottom Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {/* Card 1 */}
        <div className="relative w-96 h-64 rounded-3xl overflow-hidden">
          <img src={imy} alt="Blog 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <p className="absolute bottom-4 left-4 text-white text-xl font-medium font-['Work_Sans'] leading-snug">
            From Idea to Impact: The Content Creation Process Explained
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative w-96 h-64 rounded-3xl overflow-hidden">
          <img src={imr} alt="Blog 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <p className="absolute bottom-4 left-4 text-white text-xl font-medium font-['Work_Sans'] leading-snug">
            From Idea to Impact: The Content Creation Process Explained
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative w-96 h-64 rounded-3xl overflow-hidden">
          <img src={ino} alt="Blog 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <p className="absolute bottom-4 left-4 text-white text-xl font-medium font-['Work_Sans'] leading-snug">
            From Idea to Impact: The Content Creation Process Explained
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
