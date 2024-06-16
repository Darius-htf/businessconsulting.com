import { Link } from "react-router-dom";
import Button from "./Button";

// assets:
import logo from "@/images/Logo/Logo.png";
import instagram from "@/images/Icons/Instagram_black.png";
import facebook from "@/images/Icons/Facebook_black.png";
import x from "@/images/Icons/Frame 233.png";

const Footer = () => {
  return (
    <div className="Footer flex w-screen flex-col items-center text-clamp-para">
      <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-5  w-full max-w-7xl items-start justify-between gap-x-24 px-5 py-10">
        <div className="logo_sec flex w-full max-w-max flex-col items-start justify-center gap-y-3">
          <img src={logo} alt="logo" />
          <p className="line-clamp-3">
            Velit facilisi senectus velit elementum. Consequat vel arcu feugiat
            dui eu tempor pretium at porta. Dui pellentesque sagittis
            scelerisque amet vestibulum commodo quam natoque varius. Semper
            aliquam elementum posuere lacinia. Egestas dapibus massa cursus nibh
            adipiscing. Praesent nisl faucibus neque imperdiet mollis. Blandit
            sit consectetur placerat sapien amet. A pharetra sem massa bibendum
            at aliquam. Rhoncus et vitae nulla nec. Volutpat enim nisl amet
            porttitor in lectus tincidunt.
          </p>
          <div className="footer_icons flex flex-col items-start gap-y-2">
            <span>Subscribe us</span>
            <div className="icons flex items-center justify-between gap-x-2">
              <img src={instagram} alt="facebook_icon" />
              <img src={facebook} alt="x_icon" />
              <img src={x} alt="instagram_icon" />
            </div>
          </div>
        </div>
        <div className="service_sec flex w-full max-w-max flex-col items-start gap-y-3">
          <h6 className="text-lg font-bold">Services</h6>
          <ul className="space-y-4">
            <li className="hover:underline">Marketing strategy</li>
            <li className="hover:underline">Financial management</li>
            <li className="hover:underline">Business strategy</li>
            <li className="hover:underline">Sales and Marketing</li>
            <li className="hover:underline">Human Resources</li>
          </ul>
        </div>
        <div className="links_sec w-full max-w-fit space-y-3">
          <h6 className="text-lg font-bold">Useful Links</h6>
          <ul className="space-y-4">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="about">About</Link>
            </li>
            <li className="hover:underline">
              <Link to="blog">Blog</Link>
            </li>
            <li className="hover:underline">
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="faq">F.A.Q</Link>
            </li>
          </ul>
        </div>
        <div className="subscribe w-full max-w-max space-y-3">
          <h6 className="text-lg font-bold">Subscribe for our newsletter</h6>
          <span>Consequat vel arcu feugiat dui eu tempor pretium </span>
          <div className="email-taker flex w-full items-center justify-between gap-x-1">
            <input
              type="email"
              className="h-[40px] w-2/3 px-2"
              placeholder="Your email..."
            />
            <Button
              buttonFontSize={"text-md xl:text-base"}
              buttonValue={"Subscribe"}
              buttonBg={"bg-accent"}
              buttonMaxWidth={"max-w-[112px]"}
              buttonMaxHeight={"max-h-[40px] w-1/3"}
            />
          </div>
          <div className="website_info flex items-start justify-between">
            <div className="address">
              <h6 className="text-lg font-bold">Address</h6>
              <p>
                8592 Fairground <br /> St. Tallahassee, <br /> FL 32303
              </p>
            </div>
            <div className="other_info">
              <h6 className="text-lg font-bold">Email</h6>
              <p>teverett@optonline.net</p>
              <h6 className="text-lg font-bold">Phone</h6>
              <p>(863) 267-3634</p>
            </div>
          </div>
        </div>
      </div>
      <span className="text-center text-sm lg:text-base">©Copyright Business Consulting 2024. Design by Figma.guru</span>
    </div>
  );
};

export default Footer;
