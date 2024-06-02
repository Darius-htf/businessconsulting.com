import testimonialsCardImage from "@/images/Img.png";
import testimonialsIcon from "@/images/Logo/Quotes.png";

const Testimonials = () => {
  return (
    <div className="Testimonials flex w-screen items-center justify-center bg-primary px-5 py-20 text-second">
      <div className="testimonials_card flex w-[1024px] flex-col items-center justify-between bg-white p-10 shadow-xl lg:flex-row">
        <div className="lg:w-1/2">
          <img src={testimonialsCardImage} alt="card_image" />
        </div>
        <div className="testimonials_text mt-3 flex w-full flex-col gap-y-5 lg:mt-0 lg:w-1/2">
          <h1 className="text-clamp-title font-bold">Testimonials</h1>
          <p className="line-clamp-4">
            Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non
            rhoncus lobortis id neque. Sed lorem ut nulla tortor sit eget felis.
            Integer malesuada curabitur vel interdum leo justo at ultricies. Sit
            aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt
            massa amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada
            varius felis. Risus aliquam aliquam consequat habitant. Id elit
            turpis amet vel at sapien. Massa tempus augue lobortis enim quam
            consectetur dictum. Elementum id tortor venenatis lectus sed.
            Adipiscing nisi felis aliquam nunc. Quis et sed ac urna augue
            feugiat mi eget. Eget viverra egestas porta consectetur commodo
            ante.
          </p>
          <div>
            <p>Lorene Hudson</p>
            <p>CEO / Ritchie Group</p>
          </div>
          <img className="w-1/8 self-end" src={testimonialsIcon} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
