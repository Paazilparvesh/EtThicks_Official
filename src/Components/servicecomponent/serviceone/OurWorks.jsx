import { useState, useEffect, useRef } from 'react';
import log from "/src/assets/servone/Portfolis.png"

function OurWorks() {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const carouselRef = useRef(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    // Fetch portfolio data from Strapi API
    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/portfolios?populate=*');
                const data = await response.json();

                const portfolioData = data.data.map((item) => {
                    const imageUrl = item.image && item.image.length > 0
                        ? `http://localhost:1337${item.image[0].url}`
                        : 'https://via.placeholder.com/400x300/cccccc/000000?text=No+Image';

                    return {
                        id: item.id,
                        documentId: item.documentId,
                        image: imageUrl,
                        title: item.name || 'Project Name',
                        url: item.url || '#'
                    };
                });

                setPortfolioItems(portfolioData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching portfolio:', error);
                setLoading(false);
            }
        };

        fetchPortfolio();
    }, []);

    // Auto scroll effect with smooth infinite loop
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel || portfolioItems.length === 0 || !isAutoScrolling) return;

        const scrollInterval = setInterval(() => {
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;

            if (carousel.scrollLeft >= maxScroll - 1) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollTo({
                    left: carousel.scrollLeft + 1,
                    behavior: 'auto'
                });
            }
        }, 20);

        return () => clearInterval(scrollInterval);
    }, [portfolioItems, isAutoScrolling]);

    const slideLeft = () => {
        if (carouselRef.current) {
            const scrollAmount = window.innerWidth < 640 ? 270 : window.innerWidth < 768 ? 310 : 368;
            carouselRef.current.scrollTo({
                left: carouselRef.current.scrollLeft - scrollAmount,
                behavior: 'smooth'
            });
            setIsAutoScrolling(false);
            setTimeout(() => setIsAutoScrolling(true), 3000);
        }
    };

    const slideRight = () => {
        if (carouselRef.current) {
            const scrollAmount = window.innerWidth < 640 ? 270 : window.innerWidth < 768 ? 310 : 368;
            carouselRef.current.scrollTo({
                left: carouselRef.current.scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
            setIsAutoScrolling(false);
            setTimeout(() => setIsAutoScrolling(true), 3000);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-white text-lg sm:text-xl md:text-2xl">
                Loading...
            </div>
        );
    }

    return (
        <div
            style={{
                backgroundImage: `url(${log})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "500px",
                width: "100%"
            }}
            className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col h-auto sm:h-auto md:h-[671px]"
        >
            <div className="container mx-auto max-w-7xl flex-1 flex flex-col">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center sm:text-left">
                    OUR WORKS
                </h1>

                {/* Carousel Container with Controls - Centered */}
                <div className="relative flex-1 flex items-center justify-center">
                    {/* Left Button - Mobile Responsive */}
                    <button
                        onClick={slideLeft}
                        className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg transition-all active:scale-95"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Button - Mobile Responsive */}
                    <button
                        onClick={slideRight}
                        className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg transition-all active:scale-95"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 w-full">
                        <div
                            ref={carouselRef}
                            className="flex gap-3 sm:gap-3.5 md:gap-4 overflow-x-auto scroll-smooth hide-scrollbar touch-pan-x"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {/* Duplicate items for infinite loop effect */}
                            {[...portfolioItems, ...portfolioItems, ...portfolioItems].map((item, index) => (
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={`${item.documentId}-${index}`}
                                    className="flex-shrink-0 w-[250px] h-[330px] sm:w-[290px] sm:h-[380px] md:w-[352px] md:h-[460px] bg-white rounded-2xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-shadow active:scale-95"
                                >
                                    <div className="bg-gray-300 h-[270px] sm:h-[320px] md:h-[400px] w-full flex items-center justify-center overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/352x400/cccccc/000000?text=Error+Loading';
                                            }}
                                        />
                                    </div>

                                    <div className="h-[60px] w-full flex items-center justify-center px-3 sm:px-4">
                                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black text-center line-clamp-2">
                                            {item.title}
                                        </h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}

export default OurWorks;
