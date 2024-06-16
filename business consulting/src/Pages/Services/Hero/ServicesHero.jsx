// images
import Frame478 from "@/images/Groups/Frame 478.png";

// components
import Button from "../../../Components/Button";

const Hero = () => {
  return (
    <div className="ServicesHero lg:bg-marble2 mb-10 mt-10 flex flex-col items-center justify-start bg-right bg-no-repeat px-5 lg:mt-20 lg:h-[512px] lg:flex-row xl:px-0">
      <div className="hero_text flex w-full flex-col items-center gap-y-6 text-center leading-tight lg:w-1/2 lg:items-start lg:text-start">
        <p className="text-clamp-para opacity-70">Services</p>
        <h1 className="text-clamp-title">
          We bring your business to new heights
        </h1>
        <p className="line-clamp-2 text-clamp-para opacity-70 lg:line-clamp-5">
          Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non
          rhoncus lobortis id neque. Sed lorem ut nulla tortor sit eget felis.
          Integer malesuada curabitur vel interdum leo justo at ultricies. Sit
          aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt
          massa amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada
          varius felis. Risus aliquam aliquam consequat habitant. Id elit turpis
          amet vel at sapien. Massa tempus augue lobortis enim quam consectetur
          dictum. Elementum id tortor venenatis lectus sed. Adipiscing nisi
          felis aliquam nunc. Quis et sed ac urna augue feugiat mi eget. Eget
          viverra egestas porta consectetur commodo ante.
        </p>
        <Button
          buttonValue={"Learn More"}
          buttonBg={"bg-accent"}
          buttonBorder={"border-2 border-accent"}
          buttonMaxWidth={"md:max-w-[192px]"}
          buttonMaxHeight={"md:max-h-[50px]"}
        />
      </div>
      <div className="hero_pics hidden w-1/2 flex-col items-center justify-center lg:flex overflow-hidden">
        <img
          className="lg:max-w-max object-cover"
          src={Frame478}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Hero;
