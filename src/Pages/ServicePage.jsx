import { useParams } from "react-router-dom";
import Landing from "../Components/servicecomponent/serviceone/Landing";
import About from "../Components/servicecomponent/serviceone/About";
import OurWorks from "../Components/servicecomponent/serviceone/OurWorks";
import Review from "../Components/servicecomponent/serviceone/Review";
import WhyWorkWithUs from "../Components/servicecomponent/serviceone/WhyWorkWithUs";
import CTASection from "/src/Components/HomeComponents/CTASection.jsx";

function Serviceonepage() {
    const { slug } = useParams();

    return (
        <>
            <Landing slug={slug} />

            <About slug={slug} />

            <OurWorks category={slug} />

            <WhyWorkWithUs slug={slug} />

            <Review slug={slug} />

            <CTASection />
        </>
    );
}

export default Serviceonepage;
