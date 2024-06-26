const Hero = ({ children, ...props }) => {
  const bgImage = props.bgImage;

  return (
    <div
      className={`hero mt-10 flex flex-col items-center justify-start bg-right bg-no-repeat mb-10 lg:mb-0 lg:mt-20 lg:h-[512px] lg:flex-row ${bgImage} xl:px-0 px-5`}
    >
      {children}
    </div>
  );
};

const Button = ({ children }) => (
  <button className="button h-[50px] w-full">{children}</button>
);
const Title = ({ children }) => (
  <h1 className="title text-clamp-title leading-tight">{children}</h1>
);
const Description = ({ children }) => (
  <p className="description line-clamp-2 text-clamp-para opacity-70">
    {children}
  </p>
);
const PageTitle = ({ children }) => (
  <p className="page_title text-clamp-para opacity-70">{children}</p>
);
// const Vector = ({ children }) => <img className="vector" src={children} />;
const HeroImage = ({ children }) => (
  <div className="hero_image hidden h-full w-1/2 flex-col items-center justify-center overflow-hidden lg:flex">
    {children}
  </div>
);

Hero.Button = Button;
Hero.Title = Title;
Hero.Description = Description;
Hero.PageTitle = PageTitle;
// Hero.Vector = Vector;
Hero.HeroImage = HeroImage;

export default Hero;
