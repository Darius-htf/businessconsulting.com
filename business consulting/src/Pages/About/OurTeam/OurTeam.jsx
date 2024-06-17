import { useQuery } from "@apollo/client";
import { GET_EXPERTS } from "../../../GraphQL/Queries";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

const OurTeam = () => {
  const {
    data: expertsData,
    loading,
    error,
  } = useQuery(GET_EXPERTS, {
    variables: { picture: "ome-picture-id" },
    fetchPolicy: "cache-first",
  });
  const [experts, setExperts] = useState();

  useEffect(() => {
    if (expertsData && expertsData.getExperts && expertsData.getExperts[0]) {
      setExperts(expertsData.getExperts[0].experts);
    }
  }, [expertsData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="OurTeam flex w-screen flex-col items-center justify-center bg-primary py-20 text-second">
      <p className="text-clamp-para">BUISNESS CONSULTING</p>
      <h1 className="mb-10 text-clamp-title font-bold">Out team of experts</h1>
      <div className="cards_grid hidden h-full max-w-[1024px] grid-cols-3 grid-rows-2 place-items-center gap-3 px-5 md:grid lg:grid-cols-4">
        {experts &&
          experts.map((expert) => (
            <div
              className="card_body w-full bg-white shadow-lg"
              key={expert.id}
            >
              <div className="expert_image">
                <img
                  className="size-full object-cover"
                  src={expert.picture}
                  alt="expert_image"
                />
              </div>
              <div className="expert_details p-2 text-center">
                <h4 className="text-lg font-bold">{expert.name}</h4>
                <span className="text-md">{expert.jobTitle}</span>
              </div>
            </div>
          ))}
      </div>
      <div className="swiper_wrapper h-full w-full">
        <Swiper
          effect={"cube"}
          loop={true}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCube, Pagination, Autoplay]}
          className="mySwiper w-3/4 py-14 md:hidden"
        >
          {experts &&
            experts.map((expert) => (
              <SwiperSlide>
                <div
                  className="card_body w-full bg-white shadow-lg"
                  key={expert.id}
                >
                  <div className="expert_image w-full">
                    <img
                      className="size-full object-cover"
                      src={expert.picture}
                      alt="expert_image"
                    />
                  </div>
                  <div className="expert_details p-2 text-center">
                    <h4 className="text-lg font-bold">{expert.name}</h4>
                    <span className="text-md">{expert.jobTitle}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
