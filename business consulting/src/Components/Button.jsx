import { Link } from "react-router-dom";

const Button = (props) => {
  const {
    buttonValue,
    buttonBg,
    buttonTextColor,
    buttonFontSize,
    buttonBorder,
    buttonPath,
    buttonMaxHeight,
    buttonMaxWidth,
  } = props;

  return (
    <Link
      to={buttonPath}
      type="button"
      className={`flex h-full w-full items-center justify-center font-poppins ${buttonBg} py-2 ${buttonFontSize} ${buttonTextColor} ${buttonBorder} ${buttonMaxHeight} ${buttonMaxWidth}`}
    >
      {buttonValue}
    </Link>
  );
};

export default Button;
