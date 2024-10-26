import { useState } from "react";
import navbarLogo from "../../assets/navbarLogo.png";
import { NavLink } from "react-router-dom";

const commonTailwind =
  "border-b-2 w-fit whitespace-nowrap border-transparent hover:text-yellow-300 hover:border-yellow-300 hover:cursor-pointer";

const navbarLinks = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Pre Register",
    link: "/pre-register",
  },
  {
    text: "For Users",
    link: "/for-users",
  },
  {
    text: "For Business Owners",
    link: "/for-business-owners",
  },
  {
    text: "Contact Us",
    link: "/contact",
  },
  {
    text: "Services",
    link: "/services",
  },
];

const navbarDropDownLinks = [
  {
    text: "Privacy Policy App",
    link: "/privacy-policy-app",
  },
  {
    text: "Privacy Policy Website",
    link: "/privacy-policy-website",
  },
  {
    text: "Terms and Conditions",
    link: "/terms-and-conditions",
  },
  {
    text: "Refund Policy",
    link: "/refund-policy",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [openDrop, setOpenDrop] = useState(false);
  return (
    <div className="fixed w-full  z-20 top-0 h-16  flex flex-col items-center bg-black">
      <div
        className={`relative lg:max-w-screen-xl w-screen  text-white flex justify-between lg:justify-start items-center lg:gap-6 text-lg px-7 lg:px-16 `}
      >
        <NavLink to="/">
          <img src={navbarLogo} className="w-28 h-auto" alt="navbarLogo"></img>
        </NavLink>
        <div
          className="flex flex-col gap-1 lg:hidden hover:cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div
            className={`bg-white h-[0.2rem] w-6 rounded-full transform transition-all duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`bg-white h-[0.2rem] w-6 rounded-full transition-all duration-300 ease-in-out ${
              open ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`bg-white h-[0.2rem] w-6 rounded-full transform transition-all duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>

        {/* mobile view */}
        <div
          className={`absolute px-10 top-[100%] left-0 w-screen transition-all duration-3000 ease-in-out bg-black  flex-grow lg:hidden flex flex-col items-end gap-5  ${
            open
              ? "h-[50vh] py-5 overflow-y-scroll scroll-hide scroll smooth"
              : "h-0 overflow-hidden"
          }`}
        >
          {navbarLinks.map((navbarLink, index) => {
            return (
              <NavLink
                onClick={() => setOpen(false)}
                key={index}
                to={navbarLink.link}
                className={({ isActive }) =>
                  `${commonTailwind} ${
                    isActive ? "text-yellow-300 border-yellow-300" : ""
                  }`
                }
              >
                {navbarLink.text}
              </NavLink>
            );
          })}
          <div className={` group/legality flex `}>
            <div
              className={` bg-black flex flex-col items-end gap-5 rounded-md `}
            >
              <NavLink
                to="/legality"
                className={({ isActive }) =>
                  `duration-300 transition-all ease-in-out flex items-center gap-3 ${commonTailwind} ${
                    isActive ? "text-yellow-300 border-yellow-300" : ""
                  }`
                }
              >
                <p>Legality</p>
                <div
                  onClick={() => setOpenDrop((openDrop) => !openDrop)}
                  className="triangle triangle-5 group-hover/legality:rotate-180 duration-300 transition-all ease-in-out"
                ></div>
              </NavLink>
              <div
                className={`flex-col gap-5 hidden group-hover/legality:flex ${
                  openDrop && "flex"
                }`}
              >
                {navbarDropDownLinks.map((navbarDropDownLinks, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={navbarDropDownLinks.link}
                      className={({ isActive }) =>
                        `${commonTailwind} mr-10 ${
                          isActive ? "text-yellow-300 border-yellow-300" : ""
                        }`
                      }
                    >
                      {navbarDropDownLinks.text}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* destop view */}
        <div className="flex-grow hidden lg:flex gap-8 h-18 ">
          {navbarLinks.map((navbarLink, index) => {
            return (
              <NavLink
                key={index}
                to={navbarLink.link}
                className={({ isActive }) =>
                  `duration-300 transition-all ease-in-out ${commonTailwind} ${
                    isActive ? "text-yellow-300 border-yellow-300" : ""
                  }`
                }
              >
                {navbarLink.text}
              </NavLink>
            );
          })}
          <div className={`relative group/legality hidden lg:block`}>
            <div
              className={`absolute hidden  top-[99%] bg-black group-hover/legality:flex flex-col p-5 gap-2 rounded-md `}
            >
              {navbarDropDownLinks.map((navbarDropDownLinks, index) => {
                return (
                  <NavLink
                    key={index}
                    to={navbarDropDownLinks.link}
                    className={({ isActive }) =>
                      `duration-300 transition-all ease-in-out ${commonTailwind} ${
                        isActive ? "text-yellow-300 border-yellow-300" : ""
                      }`
                    }
                  >
                    {navbarDropDownLinks.text}
                  </NavLink>
                );
              })}
            </div>
            <NavLink
              to="/legality"
              className={({ isActive }) =>
                `duration-300 transition-all ease-in-out flex items-center gap-3 ${commonTailwind} ${
                  isActive ? "text-yellow-300 border-yellow-300" : ""
                }`
              }
            >
              <p>Legality</p>
              <div className="triangle triangle-5 group-hover/legality:rotate-180 duration-300 transition-all ease-in-out"></div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
