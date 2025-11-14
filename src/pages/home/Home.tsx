import { HeroSection } from "../../components";
// import AboutPureCheckup from "./AboutPureCheckup/AboutPureCheckup";
import WhyChoose from "./WhyChoose/Whychoose";

import TopProducts from "./TopProducts/TopProducts";
import FAQ from "./FAQ/FAQ";
// import AboutStartechnoPlast from "./about-techno-plast/AboutStartechnoPlast";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import CustomerEnquiryForm from "./CustomerEnquiryForm/CustomerEnquiryForm";



const Home = () => {
    return (
        <div className="">
            <HeroSection />
            {/* <BulkEnquiryForm /> */}
            <TopProducts />
            <WhyChoose />
            {/* <AboutStartechnoPlast /> */}
            <CustomerReviews />
            <section className="bg-gradient-to-br from-black via-[#0a0a1a] to-purple-900 py-20 px-3">
                <FAQ />
            </section>
            <CustomerEnquiryForm />

        </div>
    )
}


export default Home;