import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

//logo
import Logo from "@/images/Logo/Logo.png";

// components
import Button from "../Components/Button";
import Footer from "../Components/Footer";

// Scroll top icon
import scrollTop from "@/images/Icons/transport.svg";

const RootLayput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  const handleToScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="RootLayput flex w-full flex-col items-center bg-second px-5 text-white">
      {/* Desktop Header */}
      <header
        className={`hidden ${scrollPosition > 200 ? "fixed z-10 p-5" : "static"} w-full max-w-[1024px] items-center justify-between bg-second lg:flex`}
      >
        <img src={Logo} alt="logo" />
        <nav className="flex items-center justify-around gap-x-5 text-lg">
          <NavLink
            onClick={handleToScrollTop}
            className="decoration-accent decoration-4 underline-offset-8 [&_.active]:underline"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={handleToScrollTop}
            className="decoration-accent decoration-4 underline-offset-8 [&_.active]:underline"
            to="services"
          >
            Services
          </NavLink>
          <NavLink
            onClick={handleToScrollTop}
            className="decoration-accent decoration-4 underline-offset-8 [&_.active]:underline"
            to="about"
          >
            About
          </NavLink>
          <NavLink
            onClick={handleToScrollTop}
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
        className={`flex w-full max-w-[1024px] flex-col items-center justify-between ${isOpen ? "gap-y-10" : "gap-none"} ${scrollPosition > 200 ? "fixed z-10 bg-second p-5" : "static"} lg:hidden`}
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
            onClick={() => {
              setIsOpen(!isOpen);
              handleToScrollTop();
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            aria-disabled={isOpen ? false : true}
            onClick={() => {
              setIsOpen(!isOpen);
              handleToScrollTop();
            }}
            to="services"
          >
            Services
          </NavLink>
          <NavLink
            aria-disabled={isOpen ? false : true}
            onClick={() => {
              setIsOpen(!isOpen);
              handleToScrollTop();
            }}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            aria-disabled={isOpen ? false : true}
            onClick={() => {
              setIsOpen(!isOpen);
              handleToScrollTop();
            }}
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
      <footer>
        <Footer />
      </footer>
      {scrollPosition > 100 && (
        <button
          className="fixed bottom-0 z-10 w-[100px] overflow-hidden md:bottom-2 md:right-0"
          onClick={handleToScrollTop}
        >
          <img className="w-full" src={scrollTop} alt="scroll_top" />
        </button>
      )}
    </div>
  );
};

export default RootLayput;
