import { BulkEnquiryForm,  HeroSection} from "../../components";
// import AboutPureCheckup from "./AboutPureCheckup/AboutPureCheckup";

import WhyChoose from "./WhyChoose/Whychoose";

import TopProducts from "./TopProducts/TopProducts";
import FAQ from "./FAQ/FAQ";
import AboutStartechnoPlast from "./about-techno-plast/AboutStartechnoPlast";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import CustomerEnquiryForm from "./CustomerEnquiryForm/CustomerEnquiryForm";



const Home = () => {
    return (
        <div className="bg-white">
            {/* <SEO
               page="home"
            /> */}

            <HeroSection />
            <BulkEnquiryForm />
            <TopProducts />
            <WhyChoose />
            <AboutStartechnoPlast />
            <CustomerReviews />
            <FAQ />
            <CustomerEnquiryForm />

        </div>
    )
}


export default Home;