const Hero = ({ children }) => {
  return (
    <div className="hero mb-10 mt-10 flex flex-col items-center justify-start bg-right bg-no-repeat px-5 lg:mt-20 lg:h-[512px] lg:flex-row lg:bg-marble2 xl:px-0">
      {children}
    </div>
  );
};

const Button = ({ children }) => <div className="button">{children}</div>;
const Title = ({ children }) => <h1 className="title text-clamp-title">{children}</h1>;
const Description = ({ children }) => <p className="description line-clamp-2 text-clamp-para opacity-70 lg:line-clamp-5">{children}</p>;
const PageTitle = ({ children }) => <p className="page_title text-clamp-para opacity-70">{children}</p>;
const Vector = ({ children }) => <img className="vector" src={children} />;
const HeroImage = ({ children }) => (
  <img className="hero_image" src={children} />
);

Hero.Button = Button;
Hero.Title = Title;
Hero.Description = Description;
Hero.PageTitle = PageTitle;
Hero.Vector = Vector;
Hero.HeroImage = HeroImage;

export default Hero;
