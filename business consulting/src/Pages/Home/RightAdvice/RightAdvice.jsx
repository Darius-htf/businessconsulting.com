import rightAdvice from "@/images/rightAdvice.png";
import arrowIcon from "@/images/Icons/Icon.svg";

const RightAdvice = () => {
  return (
    <div className="RightAdvice flex w-screen flex-col items-center justify-between lg:flex-row lg:max-h-[700px] h-full">
      <img
        className="lg:h-[700px] h-1/8 w-screen lg:w-1/2 object-cover"
        src={rightAdvice}
        alt="right advice"
      />
      <div className="rightAdvice_text flex w-full flex-col items-start justify-center gap-y-10 px-8 py-7 lg:w-1/2 lg:px-16 lg:py-14">
        <p className="text-clamp-para">Business consulting</p>
        <h1 className="text-clamp-title leading-tight">
          The right advice for a brighter financial future
        </h1>

        <div>
          <div className="flex items-start justify-between gap-x-5">
            <span>
              <img className="size-10 lg:size-14" src={arrowIcon} alt="icon" />
            </span>
            <div>
              <h3 className="text-2xl font-bold">Advisory services</h3>
              <p className="my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam, impedit.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-between gap-x-5">
            <span>
              <img className="size-10 lg:size-14" src={arrowIcon} alt="icon" />
            </span>
            <div>
              <h3 className="text-2xl font-bold">Financing</h3>
              <p className="my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam, impedit.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-between gap-x-5">
            <span>
              <img className="size-10 lg:size-14" src={arrowIcon} alt="icon" />
            </span>
            <div>
              <h3 className="text-2xl font-bold">Capital</h3>
              <p className="my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam, impedit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAdvice;
