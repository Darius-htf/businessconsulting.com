import ecoArrowIcon from "@/images/Logo/Icon.png";

// graphQL / Apollo
import { useQuery } from "@apollo/client";
import { LOAD_ECO_IMGS } from "../../../GraphQL/Queries";
import { useEffect, useState } from "react";

const EconomySectors = () => {
  const { data: ecoImages, isLoading, error } = useQuery(LOAD_ECO_IMGS);
  const [ ecoSectionImages , setEcoSectionImages ] = useState();

  useEffect(() => {
    if (
        ecoImages &&
        ecoImages.getEcoSection &&
        ecoImages.getEcoSection[0].ecoSection
    ){
        setEcoSectionImages(ecoImages.getEcoSection[0].ecoSection)
    }
  } , [ecoImages])

  return (
    <div className="EconomySectors flex w-screen items-center justify-center bg-primary py-20 text-second">
      <div className="w-[1024px] px-5 flex flex-col items-center">
        <div className="economy_text flex lg:flex-row flex-col w-full items-center justify-between gap-y-3">
          <div className="lg:w-1/2">
            <p className="text-clamp-para">Business consulting</p>
            <h1 className="text-clamp-title font-bold leading-tight">
              What sectors of the economy do we serve
            </h1>
          </div>
          <div className="flex lg:w-1/2 items-center justify-between">
            <div className="lg:w-1/5 w-1/7">
              <img className="max-w-20" src={ecoArrowIcon} alt="arrow" />
            </div>
            <p className="line-clamp-3 lg:w-4/5 w-6/7">
              Sed lorem ut nulla tortor sit eget felis. Integer malesuada
              curabitur vel interdum leo justo at ultricies. Tincidunt massa
              amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada
              varius felis. Risus aliquam aliquam consequat habitant. Id elit
              turpis amet vel at sapien. Massa tempus augue lobortis enim quam
              consectetur dictum. Elementum id tortor venenatis lectus sed.
              Adipiscing nisi felis aliquam nunc. Quis et sed ac urna augue
              feugiat mi eget. Eget viverra egestas porta consectetur commodo
              ante.
            </p>
          </div>
        </div>
        <div className="eco_imageSection grid grid-rows-1 md:grid-rows-2 lg:grid-cols-4 place-self-center md:grid-cols-3 grid-cols-2 gap-3 mt-16">
            {ecoSectionImages && ecoSectionImages.map(ecoImage => (
                <img src={ecoImage.img} key={ecoImage.id} alt="eco_image"/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EconomySectors;
