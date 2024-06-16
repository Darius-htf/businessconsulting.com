// images
import arrowIcon from "@/images/Icons/Icon.svg";
import heroPerson from "@/images/Groups/smiling_black_business_woman_in_white_jacket_isolated_on_blank_transparent_background_g_1_1_1 1.png";

// components
import Button from "../../../Components/Button";

const Hero = () => {
  return (
    <div
      className="Hero lg:bg-group mb-8 mt-10 flex flex-col items-center justify-start bg-right bg-no-repeat px-5 lg:mt-20 lg:h-[512px] lg:flex-row xl:px-0"
    >
      <div className="hero_text flex w-full flex-col items-center gap-y-6 text-center leading-tight lg:w-1/2 lg:items-start lg:text-start">
        <p className="text-clamp-para opacity-70">Business consulting</p>
        <h1 className="text-clamp-title">
          Ultimate Solutions for Modern Businesses
        </h1>
        <p className="line-clamp-2 text-clamp-para opacity-70">
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
        <div className="hero_links flex w-full flex-col items-start justify-center gap-3 lg:max-w-sm lg:flex-row lg:flex-wrap lg:justify-start">
          <span className="flex items-center justify-center gap-x-1 text-base">
            <img src={arrowIcon} alt="arrow" />
            Strategic excellence
          </span>
          <span className="flex items-center justify-center gap-x-1 text-base">
            <img src={arrowIcon} alt="arrow" />
            Business consulting
          </span>
          <span className="flex items-center justify-center gap-x-1 text-base">
            <img src={arrowIcon} alt="arrow" />
            Innovation
          </span>
        </div>
        <div className="hero_buttons flex w-full flex-col items-center justify-center gap-2 md:flex-row md:gap-3 lg:justify-start">
          <Button
            buttonValue={"Get In Touch"}
            buttonBg={"bg-transparent"}
            buttonBorder={"border-2 border-accent"}
            buttonMaxWidth={"md:max-w-[192px]"}
            buttonMaxHeight={"md:max-h-[50px]"}
          />
          <Button
            buttonValue={"Learn More"}
            buttonBg={"bg-accent"}
            buttonBorder={"border-2 border-accent"}
            buttonMaxWidth={"md:max-w-[192px]"}
            buttonMaxHeight={"md:max-h-[50px]"}
          />
        </div>
      </div>
      <div className="hero_pics hidden w-1/2 flex-col items-center justify-center overflow-hidden lg:flex">
        <img
          className="lg:max-w-max object-cover"
          src={heroPerson}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Hero;
