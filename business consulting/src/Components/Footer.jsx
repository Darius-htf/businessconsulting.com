import { Link } from "react-router-dom";
import Button from "./Button";

// assets:
import logo from "@/images/Logo/Logo.png";
import instagram from "@/images/Icons/Instagram_black.png";
import facebook from "@/images/Icons/Facebook_black.png";
import x from "@/images/Icons/Frame 233.png";

const Footer = () => {
  return (
    <div className="Footer flex w-screen flex-col items-center">
      <div className="flex w-full max-w-xl items-start justify-between">
        <div className="logo_sec flex w-1/4 flex-col items-start justify-center">
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
          <div className="footer_icons flex flex-col items-start">
            <span>Subscribe us</span>
            <div className="icons flex items-center justify-between">
              <img src={instagram} alt="facebook_icon" />
              <img src={facebook} alt="x_icon" />
              <img src={x} alt="instagram_icon" />
            </div>
          </div>
        </div>
        <div className="service_sec flex w-1/4 flex-col items-start">
          <h6 className="font-bold">Services</h6>
          <ul>
            <li>Marketing strategy</li>
            <li>Financial management</li>
            <li>Business strategy</li>
            <li>Sales and Marketing</li>
            <li>Human Resources</li>
          </ul>
        </div>
        <div className="links_sec w-1/4">
          <h6 className="font-bold">Useful Links</h6>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="faq">F.A.Q</Link>
            </li>
          </ul>
        </div>
        <div className="subscribe">
          <h6>Subscribe for our newsletter</h6>
          <span>Consequat vel arcu feugiat dui eu tempor pretium </span>
          <div className="email-taker">
            <input type="email" className="h-[40px] placeholder:['Your email...']"/>
            <Button
              buttonValue={"Subscribe"}
              buttonBg={"bg-accent"}
              buttonMaxWidth={"max-w-[112px]"}
              buttonMaxHeight={"max-h-[40px]"}
            />
          </div>
        </div>
      </div>
      <span>©Copyright Business Consulting 2024. Design by Figma.guru</span>
    </div>
  );
};

export default Footer;
