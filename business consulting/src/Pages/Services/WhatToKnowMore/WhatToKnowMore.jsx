import Button from "../../../Components/Button";

const WhatToKnowMore = () => {
  return (
    <div className="WhatToKnowMore flex w-screen items-center justify-center py-10 text-center">
      <div className="flex w-[1024px] flex-col items-center gap-y-8">
        <h1 className="text-lg md:text-clamp-title leading-tight">
          Want to know more? <br /> Contact with our business consultant
        </h1>
        <Button
          buttonValue={"Learn more"}
          buttonBg={"bg-accent"}
          buttonMaxHeight={"max-h-[50px]"}
          buttonMaxWidth={"max-w-[193px]"}
        />
      </div>
    </div>
  );
};

export default WhatToKnowMore;
