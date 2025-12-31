// import { useState, useEffect, useRef } from 'react';
// import { FaUserCircle } from "react-icons/fa";

// const useMediaQuery = (query) => {
//     const [matches, setMatches] = useState(false);

//     useEffect(() => {
//         const media = window.matchMedia(query);
//         const listener = () => setMatches(media.matches);
//         listener();
//         media.addEventListener("change", listener);
//         return () => media.removeEventListener("change", listener);
//     }, [query]);

//     return matches;
// };

// function Review() {
//     const [reviews, setReviews] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [errored, setErrored] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const intervalRef = useRef(null);

//     const Base_Url = import.meta.env.VITE_API_URL

//     const isMobile = useMediaQuery("(max-width: 767px)");
//     const isTab = useMediaQuery("(max-width: 1024px)");
//     const isLaptop = useMediaQuery("(max-width: 1440px)");

//     // Fetch reviews from Strapi API
//     useEffect(() => {
//         const fetchReviews = async () => {
//             try {
//                 const response = await fetch(`${Base_Url}/api/reviews/?populate=*`);
//                 const data = await response.json();

//                 const reviewData = data.data.map((item) => {
//                     const imageUrl = item.image && item.image.length > 0 && `${Base_Url}${item.image[0].url}`

//                     return {
//                         id: item.id,
//                         documentId: item.documentId,
//                         name: item.name,
//                         content: item.content,
//                         image: imageUrl
//                     };
//                 });

//                 setReviews(reviewData);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching reviews:', error);
//                 setLoading(false);
//             }
//         };

//         fetchReviews();
//     }, []);

//     // Auto-scroll vertical carousel effect
//     useEffect(() => {
//         if (reviews.length === 0) return;

//         intervalRef.current = setInterval(() => {
//             setCurrentIndex((prevIndex) => {
//                 const nextIndex = prevIndex === reviews.length - 1 ? 0 : prevIndex + 1;
//                 return nextIndex;
//             });
//         }, 4000);

//         return () => {
//             if (intervalRef.current) {
//                 clearInterval(intervalRef.current);
//             }
//         };
//     }, [reviews]);

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center min-h-screen bg-black text-white text-lg sm:text-xl md:text-2xl">
//                 Loading...
//             </div>
//         );
//     }

//     if (errored && reviews.image) {
//         return (
//             <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-800 flex items-center justify-center border-2 border-[#FFAE00]">
//                 <FaUserCircle className="text-gray-400" size={32} />
//             </div>
//         );
//     }

//     return (
//         // <div className="w-full  px-4 md:px-10 pt-40 min-h-screen md:min-h-auto flex flex-col md:flex-row justify-center items-center overflow-hidden relative">
//         <div className="
//   w-full bg-black
//   px-4 sm:px-6 md:px-10
//   pt-20 sm:pt-24 md:pt-32
//   min-h-auto
//   flex flex-col md:flex-row
//   justify-center items-center
//   overflow-hidden relative
// ">

//             {/* Top Black Fade */}
// <div className="pointer-events-none absolute top-20 left-0 w-full h-48 md:h-64 bg-gradient-to-b from-black via-back-600/30 to-transparent z-5"></div>
            
      
          

//             <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 xl:px-16 md:py-20 z-20">

//                 {/* Left Section - Title and Description */}
//                 <div className="w-full md:w-1/2 text-white z-30">
//                     <h1
//                         className="text-center md:text-start text-3xl md:text-4xl lg:text-5xl xl:text-7xl leading-tight font-worksans font-medium"
//                     >
//                         What <span style={{ color: '#FFAE00' }}>Our<br className='hidden lg:block' /> Customer</span> Says
//                     </h1>
//                     <p
//                         className="text-[#BABABA] leading-relaxed tracking-widest text-center md:text-start text-lg md:text-sm lg:text-lg font-nunito"
//                     >
//                         We combine creativity and technology to create meaningful brand experiences.
//                         From content to design, we deliver solutions that elevate your business.
//                     </p>
//                 </div>

//                 {/* Right Section - Automatic Vertical Carousel */}
//                 <div className="w-full md:w-1/2 relative flex justify-center lg:justify-start items-center py-20">
//                     {/* Carousel Container */}
//                     {/* <div
//                         className="relative overflow-hidden lg:overflow-visible rounded-2xl sm:rounded-3xl w-full max-w-[340px] sm:max-w-[450px] md:max-w-[570px] h-[560px] md:h-60 lg:h-50 "
//                     > */}
//                     <div className="
//   relative overflow-hidden
//   rounded-2xl sm:rounded-3xl
//   w-full
//   max-w-[320px] sm:max-w-[420px] md:max-w-[570px]
//   h-[420px] sm:h-[460px] md:h-[520px]
// ">

//                         {reviews.map((review, index) => {
//                             const isActive = index === currentIndex;
//                             const isPrev = index === (currentIndex - 1 + reviews.length) % reviews.length;
//                             const isNext = index === (currentIndex + 1) % reviews.length;

//                             let translateY = 20;   // default "far" position
//                             let translateX = 20;   // default "far" position
//                             let scale = 0.9;
//                             let opacity = 0;
//                             let zIndex = 0;

//                             if (isActive) {
//                                 translateY = 0;
//                                 translateX = 0;
//                                 scale = 1;
//                                 opacity = 1;
//                                 zIndex = 30;
//                             } else if (isPrev) {
//                                 translateY = -230;
//                                 translateX = 140;
//                                 scale = 0.96;
//                                 opacity = 0.6;
//                                 zIndex = 20;
//                             } else if (isNext) {
//                                 translateY = 230;
//                                 translateX = 140;
//                                 scale = 0.96;
//                                 opacity = 0.6;
//                                 zIndex = 10;
//                             }

//                             // override with mobile positions
//                             if (isMobile) {
//                                 if (isPrev) {
//                                     translateY = -260; // mobile prev (tweak as you like)
//                                     translateX = 0;
//                                 } else if (isNext) {
//                                     translateY = 260;  // mobile next
//                                     translateX = 0;
//                                 }
//                             }

//                             // override with mobile positions
//                             if (isTab) {
//                                 if (isPrev) {
//                                     translateY = -260; // mobile prev (tweak as you like)
//                                     translateX = 0;
//                                 } else if (isNext) {
//                                     translateY = 260;  // mobile next
//                                     translateX = 0;
//                                 }
//                             }

//                             // override with mobile positions
//                             if (isLaptop) {
//                                 if (isPrev) {
//                                     translateY = -210; // mobile prev (tweak as you like)
//                                     // translateX = 0;
//                                 } else if (isNext) {
//                                     translateY = 210;  // mobile next
//                                     // translateX = 0;
//                                 }
//                             }

//                             return (
//                                 <div
//                                     key={review.documentId}
//                                     className="absolute top-38 md:top-0 inset-0 flex"
//                                     style={{
//                                         transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`,
//                                         opacity,
//                                         zIndex,
//                                         transition: 'transform 0.7s ease, opacity 0.7s ease',
//                                         pointerEvents: isActive ? 'auto' : 'none',
//                                     }}
//                                 >
//                                     <div
//                                         className="relative bg-black border-2 border-[#FFAE00] rounded-2xl sm:rounded-3xl min-h-[200px] lg:h-auto
//  flex flex-col lg:flex-row items-start lg:items-center justify-center w-full"
//                                     >
//                                         {/* Left Side - Profile */}
//                                         <div className="flex flex-row lg:flex-col items-center lg:items-center justify-start gap-3 p-4  w-full lg:w-auto">
//                                             <div
//                                                 className="size-14 rounded-full overflow-hidden bg-gray-300 shrink-0 border-2 border-[#FFAE00]"
//                                             >
//                                                 <img
//                                                     src={review.image}
//                                                     alt={review.name}
//                                                     className="w-full h-full object-cover"
//                                                     loading="lazy"
//                                                     onError={() => setErrored(true)}
//                                                 />
//                                             </div>
//                                             <div className="text-left sm:text-center">
//                                                 <h3 className="text-white font-bold text-2xl sm:text-sm -mt-2 ml-2 capitalize font-worksans">
//                                                     {review.name}
//                                                 </h3>
//                                             </div>
//                                         </div>

//                                         <div
//                                             className="absolute -top-8 right-6 text-gray-600 text-7xl sm:text-4xl md:text-7xl scale-150 leading-none opacity-50 font-nunito">,,
//                                         </div>

//                                         {/* Right Side - Content */}
//                                         <div className="flex-1 p-4">
//                                             <p className="text-white text-left text-lg sm:text-sm leading-relaxed line-clamp-4 md:line-clamp-6 sm:pr-6 font-nunito">
//                                                 {review.content}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>


//                     {/* Vertical Dots Indicator */}
//                     <div className="flex flex-col items-center gap-2 absolute right-10 sm:-right-6 md:-right-8 top-1/2 -translate-y-1/2 z-30">
//                         {reviews.map((_, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => setCurrentIndex(index)}
//                                 className={`rounded-full transition-all duration-300 ${index === currentIndex
//                                     ? 'w-2 h-6 sm:w-2.5 sm:h-7 md:w-3 md:h-8'
//                                     : 'w-1.5 h-1.5 sm:w-2 sm:h-2 opacity-50'
//                                     }`}
//                                 style={{ backgroundColor: '#FFAE00' }}
//                                 aria-label={`Go to review ${index + 1}`}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Custom Styles */}
//             <style jsx>{`
//                 .line-clamp-4 {
//                     display: -webkit-box;
//                     -webkit-line-clamp: 4;
//                     -webkit-box-orient: vertical;
//                     overflow: hidden;
//                 }
//                 .line-clamp-5 {
//                     display: -webkit-box;
//                     -webkit-line-clamp: 5;
//                     -webkit-box-orient: vertical;
//                     overflow: hidden;
//                 }
//                 .line-clamp-6 {
//                     display: -webkit-box;
//                     -webkit-line-clamp: 6;
//                     -webkit-box-orient: vertical;
//                     overflow: hidden;
//                 }
//             `}</style>
//         </div>
//     );
// }

// export default Review;
import { useState, useEffect, useRef } from 'react';
import { FaUserCircle } from "react-icons/fa";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

function Review() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const Base_Url = import.meta.env.VITE_API_URL;

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTab = useMediaQuery("(max-width: 1024px)");
  const isLaptop = useMediaQuery("(max-width: 1440px)");

  /* ---------------- FETCH REVIEWS ---------------- */
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${Base_Url}/api/reviews/?populate=*`);
        const data = await response.json();

        const reviewData = data.data.map((item) => {
          const imageUrl =
            item.image && item.image.length > 0
              ? `${Base_Url}${item.image[0].url}`
              : null;

          return {
            id: item.id,
            documentId: item.documentId,
            name: item.name,
            content: item.content,
            image: imageUrl
          };
        });

        setReviews(reviewData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  /* ---------------- AUTO SCROLL ---------------- */
  useEffect(() => {
    if (!reviews.length) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === reviews.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [reviews]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="
      w-full bg-black
      px-4 sm:px-6 md:px-10
      pt-20 sm:pt-24 md:pt-32
      flex flex-col md:flex-row
      justify-center items-center
      overflow-hidden relative
    ">

      {/* TOP FADE */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 md:h-64 bg-gradient-to-b from-black via-black/40 to-transparent z-10" />

      <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 xl:px-16 md:py-20 z-20">

        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 text-white z-30">
          <h1 className="text-center md:text-start text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-worksans font-medium">
            What <span className="text-[#FFAE00]">Our<br className="hidden lg:block" /> Customer</span> Says
          </h1>
          <p className="text-[#BABABA] text-center md:text-start text-lg md:text-sm lg:text-lg font-nunito">
            We combine creativity and technology to create meaningful brand experiences.
            From content to design, we deliver solutions that elevate your business.
          </p>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="w-full md:w-1/2 relative flex justify-center lg:justify-start items-center py-20">

          {/* CAROUSEL CONTAINER */}
          <div className="
            relative overflow-hidden
            rounded-2xl sm:rounded-3xl
            w-full
            max-w-[320px] sm:max-w-[420px] md:max-w-[570px]
            h-[520px] sm:h-[460px] md:h-[520px]
          ">

            {reviews.map((review, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + reviews.length) % reviews.length;
              const isNext = index === (currentIndex + 1) % reviews.length;

              let translateY = 20;
              let translateX = 20;
              let scale = 0.9;
              let opacity = 0;
              let zIndex = 0;

              /* -------- DESKTOP / LAPTOP (UNCHANGED) -------- */
              if (!isMobile) {
                if (isActive) {
                  translateY = 0;
                  translateX = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = 30;
                } else if (isPrev) {
                  translateY = -230;
                  translateX = 140;
                  scale = 0.96;
                  opacity = 0.6;
                  zIndex = 20;
                } else if (isNext) {
                  translateY = 230;
                  translateX = 140;
                  scale = 0.96;
                  opacity = 0.6;
                  zIndex = 10;
                }
              }

              /* -------- MOBILE (FIXED) -------- */
              if (isMobile) {
                if (isActive) {
                  translateY = 0;
                  translateX = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = 30;
                } else if (isPrev) {
                  translateY = -200;
                  translateX = 0;
                  scale = 0.95;
                  opacity = 0.5;
                  zIndex = 20;
                } else if (isNext) {
                  translateY = 200;
                  translateX = 0;
                  scale = 0.95;
                  opacity = 0.5;
                  zIndex = 10;
                }
              }

              return (
                <div
                  key={review.documentId}
                  className="absolute top-0 left-0 w-full flex justify-center"
                  style={{
                    transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`,
                    opacity,
                    zIndex,
                    transition: 'transform 0.7s ease, opacity 0.7s ease',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div className="relative bg-black border-2 border-[#FFAE00] rounded-2xl sm:rounded-3xl min-h-[220px] w-full flex flex-col lg:flex-row items-start lg:items-center p-4">
                    
                    {/* PROFILE */}
                    <div className="flex flex-row lg:flex-col items-center gap-3">
                      <div className="size-14 rounded-full overflow-hidden border-2 border-[#FFAE00]">
                        {review.image ? (
                          <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                        ) : (
                          <FaUserCircle className="w-full h-full text-gray-500" />
                        )}
                      </div>
                      <h3 className="text-white font-bold text-sm capitalize">
                        {review.name}
                      </h3>
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 p-4">
                      <p className="text-white text-sm leading-relaxed line-clamp-5">
                        {review.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DOTS */}
          <div className="flex flex-col items-center gap-2 absolute right-10 sm:-right-6 md:-right-8 top-1/2 -translate-y-1/2 z-30">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all ${index === currentIndex ? 'w-2 h-6' : 'w-2 h-2 opacity-50'}`}
                style={{ backgroundColor: '#FFAE00' }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default Review;
