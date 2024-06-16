import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOAD_CARDS } from "../../../GraphQL/Queries";
import { useEffect, useState } from "react";

// components
import Button from "../../../Components/Button";

const ServicesOfferServicesComp = () => {
  const { data: servicesCardsData, isLoading, error } = useQuery(LOAD_CARDS);
  const [cardsData, setCardsData] = useState();

  useEffect(() => {
    if (
      servicesCardsData &&
      servicesCardsData.getCardsData &&
      servicesCardsData.getCardsData[0]
    )
      setCardsData(servicesCardsData.getCardsData[0].cardsData);
  }, [servicesCardsData]);

  useEffect(() => {
    if (cardsData) {
      console.log("data: ", cardsData);
    }
  }, [cardsData]);

  return (
    <div className="ServicesOffer bg-primary flex h-full w-screen flex-col items-center justify-center text-second">
      <div className="my-20 flex w-full max-w-[1024px] flex-col items-center justify-center px-5">
        <div className="services_text flex flex-col items-center justify-between gap-y-5 leading-tight lg:flex-row lg:items-end lg:gap-x-10">
          <div className="w-full lg:w-1/2">
            <p className="text-clamp-para">BUSINESS CONSULTING</p>
            <h1 className="text-clamp-title font-bold">
              What services do we offer for your business
            </h1>
          </div>
          <div className="flex w-full flex-col items-start gap-y-2 lg:w-1/2">
            <p className="line-clamp-3">
              Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam.
              Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae
              aliquam malesuada varius felis. Risus aliquam aliquam consequat
              habitant. Id elit turpis amet vel at sapien. Massa tempus augue
              lobortis enim quam consectetur dictum. Elementum id tortor
              venenatis lectus sed. Adipiscing nisi felis aliquam nunc. Quis et
              sed ac urna augue feugiat mi eget. Eget viverra egestas porta
              consectetur commodo ante.
            </p>
          </div>
        </div>
        <div className="services_cards my-20 grid w-full md:grid-cols-2 grid-rows-2 gap-10 grid-cols-1 lg:grid-cols-3 place-items-center">
          {cardsData &&
            cardsData.map((cardData) => (
              <Link
                key={cardData.id}
                to={cardData.id.toString()}
                className="first:text-primary flex max-h-[380px] h-full max-w-[332px] flex-col items-start justify-between gap-y-2 bg-white p-10 first:bg-second"
              >
                <img src={cardData.icon} alt="icon" />
                <div className="space-y-3">
                  <h3 className="text-2xl">{cardData.title}</h3>
                  <p className="text-clamp-para line-clamp-3 opacity-70">
                    {cardData.caption}
                  </p>
                </div>
                <Button
                  buttonMaxHeight={"max-h-[50px]"}
                  buttonMaxWidth={"max-w-[193px]"}
                  buttonBg={"bg-accent"}
                  buttonValue={"Details ->"}
                  buttonTextColor={"text-white"}
                  buttonFontSize={"text-xl"}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOfferServicesComp;
