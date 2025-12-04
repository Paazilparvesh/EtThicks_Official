import Engag from "../../Components/servicecomponent/serviceone/Engag";
import Port from "../../Components/servicecomponent/serviceone/port";
import Review from "../../Components/servicecomponent/serviceone/Review";
import Serlanding from "../../Components/servicecomponent/serviceone/Serlanding";
import WhyWorkWithUs from "../../Components/servicecomponent/serviceone/WhyWorkWithUs";
import CTASection from "/src/Components/HomeComponents/CTASection.jsx";
function Serviceonepage() {
    return(
        <>
       <Serlanding/>
       <Engag/>
       <Port/>
       <WhyWorkWithUs/>
       <Review/>
        <CTASection />
        </>
    )
}
export default Serviceonepage;