const HomeData = () => {
  return (
    <div className="HomeData flex md:h-[200px] w-screen justify-center bg-white text-second">
      <div className="items-centers my-10 flex w-full max-w-[1024px] flex-col justify-around gap-y-10 px-5 md:my-0 md:flex-row md:gap-y-0 xl:justify-between ">
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-second md:text-5xl lg:text-6xl">
            10k+
          </span>
          <span className="opacity-70">Supported Businesses</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-second md:text-5xl lg:text-6xl">
            12k+
          </span>
          <span className="opacity-70">Projects Done</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-second md:text-5xl lg:text-6xl">
            4k+
          </span>
          <span className="opacity-70">Clients Worldwide</span>
        </div>
      </div>
    </div>
  );
};

export default HomeData;
