import { useState, useEffect, useRef } from 'react';
import log from "/src/assets/servone/Portfolis.png"

function Port() {
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
                // Reset to beginning smoothly
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
            carouselRef.current.scrollTo({
                left: carouselRef.current.scrollLeft - 368,
                behavior: 'smooth'
            });
            setIsAutoScrolling(false);
            setTimeout(() => setIsAutoScrolling(true), 3000);
        }
    };

    const slideRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: carouselRef.current.scrollLeft + 368,
                behavior: 'smooth'
            });
            setIsAutoScrolling(false);
            setTimeout(() => setIsAutoScrolling(true), 3000);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-white text-2xl">
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
                minHeight: "671px",
                width: "100%"
            }}
            className="py-12 px-4 md:px-8 lg:px-16"
        >
            <div className="container mx-auto max-w-7xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 md:mb-12 text-center sm:text-left">
                    OUR WORKS
                </h1>
                
                {/* Carousel Container with Controls */}
                <div className="relative h-[671px] flex items-center">
                    {/* Left Button */}
                    <button 
                        onClick={slideLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Button */}
                    <button 
                        onClick={slideRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="overflow-hidden px-12 w-full">
                        <div 
                            ref={carouselRef}
                            className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {/* Duplicate items for infinite loop effect */}
                            {[...portfolioItems, ...portfolioItems, ...portfolioItems].map((item, index) => (
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={`${item.documentId}-${index}`}
                                    className="flex-shrink-0 w-[352px] h-[460px] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                                >
                                    <div className="bg-gray-300 h-[340px] w-full flex items-center justify-center overflow-hidden">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/352x340/cccccc/000000?text=Error+Loading';
                                            }}
                                        />
                                    </div>
                                    
                                    <div className="p-6 h-[120px] flex items-center justify-center">
                                        <h3 className="text-xl font-bold text-black text-center">
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

export default Port;
