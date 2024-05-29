import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

//logo
import Logo from "@/images/Logo/Logo.png";
import Button from "../Components/Button";

const RootLayput = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="RootLayput flex w-full flex-col items-center bg-second px-5 text-white">
      {/* Desktop Header */}
      <header className="hidden w-full max-w-[1024px] items-center justify-between lg:flex">
        <img src={Logo} alt="logo" />
        <nav className="flex items-center justify-around gap-x-5 text-lg">
          <NavLink
            className="decoration-accent decoration-4 underline-offset-8 [&_.active]:underline"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="decoration-accent decoration-4 underline-offset-8 [&_.active]:underline"
            to="services"
          >
            Services
          </NavLink>
          <NavLink
            className="decoration-accent decoration-4 underline-offset-8 [&_.active]:underline"
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className="decoration-accent decoration-4 underline-offset-8 [&_.active]:underline"
            to="contact"
          >
            Contact
          </NavLink>
        </nav>
        <Button
          buttonValue={"Get in touch"}
          buttonBg={"transparent"}
          buttonBorder={"border-white border-2"}
          borderFontSize={"text-xl"}
          buttonMaxWidth={"max-w-[192px]"}
          buttonMaxHeight={"max-h-[50px]"}
        />
      </header>
      {/* Mobile Header */}
      <header
        className={`flex w-full max-w-[1024px] flex-col items-center justify-between ${isOpen ? "gap-y-10" : "gap-none"} lg:hidden`}
      >
        <div className="flex w-full items-center justify-between">
          <img className="mt-2" src={Logo} alt="logo" />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "CLOSE" : "OPEN"}
          </button>
        </div>
        <nav
          className={`flex w-full flex-col items-center justify-around text-lg transition-all duration-500 ${isOpen ? "h-screen opacity-100" : "h-0 opacity-0"}`}
        >
          <NavLink
            aria-disabled={isOpen ? false : true}
            onClick={() => setIsOpen(!isOpen)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            aria-disabled={isOpen ? false : true}
            onClick={() => setIsOpen(!isOpen)}
            to="services"
          >
            Services
          </NavLink>
          <NavLink
            aria-disabled={isOpen ? false : true}
            onClick={() => setIsOpen(!isOpen)}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            aria-disabled={isOpen ? false : true}
            onClick={() => setIsOpen(!isOpen)}
            to="contact"
          >
            Contact
          </NavLink>
          <Button
            buttonValue={"Get in touch"}
            buttonBg={"transparent"}
            buttonBorder={"border-white border-2"}
            borderFontSize={"text-xl"}
            buttonMaxWidth={"max-w-[192px]"}
            buttonMaxHeight={"max-h-[50px]"}
          />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayput;
