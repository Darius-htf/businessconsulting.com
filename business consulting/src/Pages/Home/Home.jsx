// components
import EconomySectors from "./EconomySectors/EconomySectors";
import Hero from "./Hero/Hero";
import HomeData from "./HomeData/HomeData";
import LatestNews from "./LatestNews/LatestNews";
import Logos from "./Logos/Logos";
import ProgressiveSolutions from "./ProgressiveSolutions/ProgressiveSolutions";
import RightAdvice from "./RightAdvice/RightAdvice";
import ServicesOffer from "./ServicesOffer/ServicesOffer";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="max-w-[1024px] w-full flex flex-col items-center">
            <Hero />
            <HomeData />
            <ServicesOffer />
            <RightAdvice />
            <EconomySectors />
            <ProgressiveSolutions />
            <Testimonials />
            <LatestNews />
            <Logos />
        </div>
    );
}
 
export default Home;