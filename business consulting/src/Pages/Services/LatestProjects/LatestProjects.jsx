import blank from "@/images/rightAdvice.png";

const LatestProjects = () => {
  return (
    <div className="LatestProjects flex w-screen items-center justify-center bg-primary py-20 text-black">
      <div className="comp_container flex w-[1024px] flex-col items-start justify-center px-5">
        <div className="title leading-tight">
          <p className="text-clamp-para">BUSINESS CONSULTING</p>
          <h1 className="text-clamp-title font-bold">Latest projects</h1>
        </div>
        <div className="latestProject_cards my-5 grid grid-cols-1 grid-rows-1 gap-3 md:grid-cols-2">
          <div className="card_body bg-white shadow-lg">
            <div className="card_image">
              <img src={blank} alt="card_image" />
            </div>
            <div className="card_text p-3 space-y-3">
              <h3 className="text-xl font-bold">
                Building business agility begins with culture
              </h3>
              <p className="line-clamp-2">
                Fringilla lacus eu porta neque turpis mauris nisi. Enim sed
                placerat aliquam lectus elit
              </p>
            </div>
          </div>
          <div className="card_body bg-white shadow-lg">
            <div className="card_image">
              <img src={blank} alt="card_image" />
            </div>
            <div className="card_text p-3 space-y-3">
              <h3 className="text-xl font-bold">
                Building business agility begins with culture
              </h3>
              <p className="line-clamp-2">
                Fringilla lacus eu porta neque turpis mauris nisi. Enim sed
                placerat aliquam lectus elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
