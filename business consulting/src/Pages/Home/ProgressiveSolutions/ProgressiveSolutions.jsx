import Button from "../../../Components/Button";

// image
import ProgressiveSolutionsImage from "@/images/Groups/smiling_black_business_woman_in_white_jacket_isolated_on_blank_transparent_background_g_1_1_1 1.png";

const ProgressiveSolutions = () => {
  return (
    <div className="ProgressiveSolutions w-screen bg-second py-20 flex justify-center">
      <div className="w-[1024px] px-5 flex lg:flex-row gap-y-5 flex-col items-center justify-center lg:justify-between">
        <div className="ProgressiveSolutions_text lg:w-1/2 flex flex-col gap-y-5 w-full">
          <p className="text-clamp-para">Business consulting</p>
          <h1 className="text-clamp-title leading-tight font-bold">
            Progressive solutions for progressive businesses.
          </h1>
          <p className="lg:line-clamp-4">
            Sed lorem ut nulla tortor sit eget felis. Integer malesuada
            curabitur vel interdum leo justo at ultricies. Sit aliquet tempus
            elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet
            sagittis aliquam turpis volutpat. Vitae aliquam malesuada varius
            felis. Risus aliquam aliquam consequat habitant. Id elit turpis amet
            vel at sapien. Massa tempus augue lobortis enim quam consectetur
            dictum. Elementum id tortor venenatis lectus sed. Adipiscing nisi
            felis aliquam nunc. Quis et sed ac urna augue feugiat mi eget. Eget
            viverra egestas porta consectetur commodo ante.
          </p>
          <Button
            buttonValue={"Learn more"}
            buttonBg={"bg-accent"}
            buttonMaxHeight={"max-h-[50px]"}
            buttonMaxWidth={"lg:max-w-[193px] w-full"}
          />
        </div>
        <div className="ProgressiveSolutions_image lg:bg-accent hidden lg:flex justify-center lg:size-96 overflow-hidden ">
          <img className="-scale-x-100 object-cover" src={ProgressiveSolutionsImage} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default ProgressiveSolutions;
