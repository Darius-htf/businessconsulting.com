import blank from "@/images/rightAdvice.png";

const WeWorkWithYou = () => {
  return (
    <div className="WeWorkWithYou flex w-screen flex-col items-center justify-center bg-primary text-second">
      <div className="lgjustify-between flex w-full max-w-[1024px] flex-col items-center gap-x-3 gap-y-5 px-5 py-20 lg:flex-row lg:justify-center">
        <div className="img_wrapper w-full lg:w-1/2">
          <img className="lg:size-96 size-full object-cover" src={blank} alt="blank" />
        </div>
        <div className="text w-full lg:w-1/2 space-y-3">
          <p>BUSINESS CONSULTING</p>
          <h1 className="text-clamp-title font-bold leading-tight">
            We work with you to make your vision a reality
          </h1>
          <p className="line-clamp-3 text-clamp-para">
            Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam.
            Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam
            malesuada varius felis. Risus aliquam aliquam consequat habitant. Id
            elit turpis amet vel at sapien. Massa tempus augue lobortis enim
            quam consectetur dictum. Elementum id tortor venenatis lectus sed.
            Adipiscing nisi felis aliquam nunc. Quis et sed ac urna augue
            feugiat mi eget. Eget viverra egestas porta consectetur commodo
            ante.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeWorkWithYou;
