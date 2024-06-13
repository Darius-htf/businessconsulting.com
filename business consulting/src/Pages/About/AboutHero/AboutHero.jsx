// images
import Frame478 from "@/images/Groups/Frame 478.png";

// components
import Button from "../../../Components/Button";
import Hero from "../../../Components/Hero";

const AboutHero = () => {
  return (
    <Hero>
      <div className="hero_text flex w-full flex-col items-center gap-y-6 text-center leading-tight lg:w-1/2 lg:items-start lg:text-start">
        <Hero.PageTitle>About us</Hero.PageTitle>
        <Hero.Title>
          We help our clients constantly see the bigger picture
        </Hero.Title>
        <Hero.Description>
          Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non
          rhoncus lobortis id neque. Sed lorem ut nulla tortor sit eget felis.
          Integer malesuada curabitur vel interdum leo justo at ultricies. Sit
          aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt
          massa amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada
          varius felis. Risus aliquam aliquam consequat habitant. Id elit turpis
          amet vel at sapien. Massa tempus augue lobortis enim quam consectetur
          dictum. Elementum id tortor venenatis lectus sed. Adipiscing nisi
          felis aliquam nunc. Quis et sed ac urna augue feugiat mi eget. Eget
          viverra egestas porta consectetur commodo ante.
        </Hero.Description>
        <Hero.Button>
          <Button
            buttonValue={"Learn more"}
            buttonBg={"bg-accent"}
            buttonMaxWidth={"max-w-[193px]"}
            buttonMaxHeight={"max-h-[50px]"}
          />
        </Hero.Button>
      </div>
    </Hero>
  );
};

export default AboutHero;
