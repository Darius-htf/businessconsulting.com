// components
import EconomySectors from "./EconomySectors/EconomySectors";
import Hero from "./Hero/Hero";
import HomeData from "./HomeData/HomeData";
import RightAdvice from "./RightAdvice/RightAdvice";
import ServicesOffer from "./ServicesOffer/ServicesOffer";

const Home = () => {
    return (
        <div className="max-w-[1024px] w-full flex flex-col items-center">
            <Hero />
            <HomeData />
            <ServicesOffer />
            <RightAdvice />
            <EconomySectors />
        </div>
    );
}
 
export default Home;