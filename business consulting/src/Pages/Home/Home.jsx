// components
import Hero from "./Hero/Hero";
import HomeData from "./HomeData/HomeData";
import ServicesOffer from "./ServicesOffer/ServicesOffer";

const Home = () => {
    return (
        <div className="max-w-[1024px] w-full flex flex-col items-center">
            <Hero />
            <HomeData />
            <ServicesOffer />
        </div>
    );
}
 
export default Home;