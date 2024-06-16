import How from "@/images/Icons/HowWeWork.png";
import What from "@/images/Icons/WhatWeDo.png";
import Where from "@/images/Icons/WhereWeWork.png";

const HelpingYourBusiness = () => {
  return (
    <div className="HelpingYourBusiness flex w-screen items-center justify-center bg-white py-20 text-second">
      <div className="comp_body flex flex-col items-center justify-center w-[1024px] px-5">
        <p className="text-clamp-para">BUSINESS CONSULTING</p>
        <h1 className="text-clamp-title font-bold">
          Helping your business build and grow
        </h1>
        <div className="details flex items-center justify-between mt-20 gap-5 md:flex-row  flex-col">
          <div className="flex w-full md:w-1/3 flex-col items-center justify-between gap-y-2 text-center">
            <img src={How} alt="details_icon" />
            <h4 className="font-bold text-lg">What we do</h4>
            <p className="text-clamp-para line-clamp-4 text-balance">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              maxime eaque laudantium dolorum quidem itaque? Magni eaque illo
              amet laudantium quas distinctio beatae placeat. Repellendus odio
              quis non possimus iste.
            </p>
          </div>
          <div className="flex w-full md:w-1/3 flex-col items-center justify-between gap-y-2 text-center">
            <img src={What} alt="details_icon" />
            <h4 className="font-bold text-lg">How we work</h4>
            <p className="text-clamp-para line-clamp-4 text-balance">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              maxime eaque laudantium dolorum quidem itaque? Magni eaque illo
              amet laudantium quas distinctio beatae placeat. Repellendus odio
              quis non possimus iste.
            </p>
          </div>
          <div className="flex w-full md:w-1/3 flex-col items-center justify-between gap-y-2 text-center">
            <img src={Where} alt="details_icon" />
            <h4 className="font-bold text-lg">Where we work</h4>
            <p className="text-clamp-para line-clamp-4 text-balance">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              maxime eaque laudantium dolorum quidem itaque? Magni eaque illo
              amet laudantium quas distinctio beatae placeat. Repellendus odio
              quis non possimus iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpingYourBusiness;
