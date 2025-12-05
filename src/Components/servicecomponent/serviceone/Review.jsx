import { useState, useEffect, useRef } from 'react';

function Review() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    // Fetch reviews from Strapi API
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/reviews/?populate=*');
                const data = await response.json();
                
                const reviewData = data.data.map((item) => {
                    const imageUrl = item.image && item.image.length > 0
                        ? `http://localhost:1337${item.image[0].url}`
                        : 'https://via.placeholder.com/100x100/cccccc/000000?text=User';
                    
                    return {
                        id: item.id,
                        documentId: item.documentId,
                        name: item.name,
                        role: item.role,
                        content: item.content,
                        image: imageUrl
                    };
                });
                
                setReviews(reviewData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    // Auto-scroll vertical carousel effect - automatically moves to next review
    useEffect(() => {
        if (reviews.length === 0) return;

        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex === reviews.length - 1 ? 0 : prevIndex + 1;
                return nextIndex;
            });
        }, 4000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [reviews]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white text-2xl">
                Loading...
            </div>
        );
    }

    return (
        <div className="bg-black px-4 md:px-8 lg:px-16" style={{ height: '436px' }}>
            <div className="container mx-auto max-w-7xl h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                    
                    {/* Left Section - Title and Description */}
                    <div className="text-white">
                        <h1 
                            className="mb-6"
                            style={{
                                fontFamily: "'Work Sans', sans-serif",
                                fontWeight: 500,
                                fontSize: "40px",
                                lineHeight: "1.2"
                            }}
                        >
                            What <span style={{ color: '#FFAE00' }}>Our Customer</span> Says
                        </h1>
                        <p 
                            className="text-gray-400 leading-relaxed"
                            style={{
                                fontFamily: "'Onset', sans-serif",
                                fontWeight: 400,
                                fontSize: "16px"
                            }}
                        >
                            We combine creativity and technology to create meaningful brand experiences. 
                            From content to design, we deliver solutions that elevate your business. 
                            Specialize in content creation, branding, and digital development. 
                            Our goal is to help you stand out in a competitive digital world.
                        </p>
                    </div>

                    {/* Right Section - Automatic Vertical Carousel */}
                    <div className="relative flex justify-start items-center">
                        {/* Carousel Container */}
                        <div 
                            className="relative overflow-hidden rounded-3xl w-[570px]"
                            style={{ height: '239px' }}
                        >
                            {/* Slides Wrapper - Vertical Auto Scroll */}
                            <div 
                                className="flex flex-col transition-transform duration-700 ease-in-out"
                                style={{ 
                                    transform: `translateY(-${currentIndex * 239}px)`,
                                }}
                            >
                                {reviews.map((review) => (
                                    <div 
                                        key={review.documentId}
                                        className="flex-shrink-0 w-[570px] h-[239px]"
                                    >
                                        <div 
                                            className="relative bg-black border-2 rounded-3xl h-full flex"
                                            style={{ borderColor: '#FFAE00' }}
                                        >
                                            {/* Left Side - Profile Image and Name */}
                                            <div className="flex flex-col items-center justify-start gap-3 p-6 w-[180px]">
                                                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 flex-shrink-0 border-2"
                                                    style={{ borderColor: '#FFAE00' }}
                                                >
                                                    <img 
                                                        src={review.image} 
                                                        alt={review.name}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.target.src = 'https://via.placeholder.com/80x80/cccccc/000000?text=User';
                                                        }}
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="text-white font-bold text-sm">
                                                        {review.name}
                                                    </h3>
                                                    {review.role && (
                                                        <p className="text-gray-400 text-xs mt-1">
                                                            {review.role}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Right Side - Description */}
                                            <div className="flex-1 flex items-center p-6 pr-8">
                                                <div className="relative w-full">
                                                    {/* Quote Mark */}
                                                    <div className="absolute -top-2 -right-2 text-gray-600 text-5xl font-serif leading-none opacity-50">
                                                        ,,
                                                    </div>
                                                    <p className="text-white text-sm leading-relaxed line-clamp-6 pr-6">
                                                        {review.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vertical Dots Indicator */}
                        <div className="flex flex-col items-center gap-2 absolute -right-8 top-1/2 -translate-y-1/2">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'w-3 h-8' 
                                            : 'w-2 h-2 opacity-50'
                                    }`}
                                    style={{ backgroundColor: '#FFAE00' }}
                                    aria-label={`Go to review ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .line-clamp-6 {
                    display: -webkit-box;
                    -webkit-line-clamp: 6;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}

export default Review;
