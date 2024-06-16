// Components
import AboutHero from "./AboutHero/AboutHero";
import HelpingYourBusiness from "./HelpingYourBusiness/HelpingYourBusiness";
import OurTeam from "./OurTeam/OurTeam";

const About = () => {
    return (
        <div className="About max-w-[1024px] w-full flex flex-col items-center">
            <AboutHero />
            <HelpingYourBusiness/ >
            <OurTeam />
        </div>
    );
}
 
export default About;