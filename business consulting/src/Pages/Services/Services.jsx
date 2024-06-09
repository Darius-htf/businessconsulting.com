import ServicesHero from "../Services/Hero/ServicesHero";
import ServicesLogos from "./Logos/ServicesLogos";
import ServicesOfferServicesComp from "./ServicesOffer(ServicesComp)/ServicesOfferServicesComp";
import WeWorkWithYou from "./WeWorkWithYou/WeWorkWithYou";
import WhatToKnowMore from "./WhatToKnowMore/WhatToKnowMore";

const Services = () => {
    return (
        <div className="Services max-w-[1024px] w-full flex flex-col items-center">
            <ServicesHero />
            <ServicesLogos />
            <ServicesOfferServicesComp />
            <WhatToKnowMore />
            <WeWorkWithYou />
        </div>
    );
}
 
export default Services;