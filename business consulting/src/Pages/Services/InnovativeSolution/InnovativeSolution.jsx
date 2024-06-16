import Button from "../../../Components/Button";

const InnovativeSolution = () => {
  return (
    <div className="InnovativeSolution bg-blank2 flex gap-y-8 w-screen flex-col items-center justify-around py-40 bg-cover bg-center bg-no-repeat">
      <h1 className="text-clamp-title font-bold">
        Are you looking for innovative solutions?
      </h1>
      <p className="text-clamp-para line-clamp-2 w-1/3">
        Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur
        vel interdum leo justo at ultricies. Tincidunt massa amet sagittis
        aliquam turpis volutpat. Vitae aliquam malesuada varius felis. Risus
        aliquam aliquam consequat habitant. Id elit turpis amet vel at sapien.
        Massa tempus augue lobortis enim quam consectetur dictum. Elementum id
        tortor venenatis lectus sed. Adipiscing nisi felis aliquam nunc. Quis et
        sed ac urna augue feugiat mi eget. Eget viverra egestas porta
        consectetur commodo ante.
      </p>
      <Button buttonValue={"Learn more"} buttonBg={"bg-accent"} buttonMaxHeight={"max-h-[50px]"} buttonMaxWidth={"max-w-[193px]"}/>
    </div>
  );
};

export default InnovativeSolution;
