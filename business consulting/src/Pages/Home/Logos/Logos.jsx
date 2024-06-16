import company_logo1 from "@/images/Logo/Company Logos (1).png";
import company_logo2 from "@/images/Logo/Company Logos (2).png";
import company_logo3 from "@/images/Logo/Company Logos (3).png";
import company_logo4 from "@/images/Logo/Company Logos (4).png";
import company_logo5 from "@/images/Logo/Company Logos (5).png";

const Logos = () => {
  return (
    <div className="Logos flex w-screen items-center justify-center bg-white py-20">
      <div className="grid w-[1024px] grid-cols-2 grid-rows-2 place-items-center gap-5 px-5 md:flex md:items-center md:justify-between">
        <img src={company_logo1} alt="company_logo" />
        <img src={company_logo2} alt="company_logo" />
        <img src={company_logo3} alt="company_logo" />
        <img src={company_logo4} alt="company_logo" />
        <img src={company_logo5} alt="company_logo" />
      </div>
    </div>
  );
};

export default Logos;
