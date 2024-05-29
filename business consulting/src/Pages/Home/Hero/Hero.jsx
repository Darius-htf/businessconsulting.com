// images
import arrowIcon from "@/images/Icons/Icon.svg";
import heroGroup from "@/images/Groups/Group.png";
import heroPerson from "@/images/Groups/smiling_black_business_woman_in_white_jacket_isolated_on_blank_transparent_background_g_1_1_1 1.png";

// components
import Button from "../../../Components/Button";

const Hero = () => {
  return (
    <div className="Hero lg:tems-start mt-10 flex flex-col items-center justify-between lg:mt-20 mb-10 lg:flex-row px-5">
      <div className="hero_text flex w-full flex-col items-center gap-y-6 text-center leading-tight lg:w-1/2 lg:items-start lg:text-start">
        <p className="text-clamp-para opacity-70">Business consulting</p>
        <h1 className="text-clamp-title">
          Ultimate Solutions for Modern Businesses
        </h1>
        <p className="text-clamp-para line-clamp-2 opacity-70">
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
        <div className="hero_links flex w-full flex-col items-start justify-center lg:justify-start gap-3 lg:max-w-sm lg:flex-row lg:flex-wrap">
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
        <div className="hero_buttons flex w-full flex-col items-center justify-center lg:justify-start gap-2 md:flex-row md:gap-3">
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
      <div className="hero_pics hidden w-1/2 flex-col items-center lg:flex">
        <img
          className="absolute z-10 lg:max-w-[400px]"
          src={heroPerson}
          alt="person"
        />
        <img
          className="absolute top-20 z-0 lg:static lg:max-w-[500px] xl:max-w-full"
          src={heroGroup}
          alt="group1"
        />
      </div>
    </div>
  );
};

export default Hero;
