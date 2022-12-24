import { useState, useEffect } from "react";

import NavItem from "./NavItem";

import { SiTwitter, SiDiscord, SiSpotify } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
const NavBar = () => {
  const [previousScroll, setPreviousScroll] = useState(-1);
  const [lastScrollAction, setLastScrollAction] = useState(true); //true = up, false = down
  const [scrollInfo, setScrollInfo] = useState({
    scrollUp: false,
    previousScroll: 0,
  });

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (scrollInfo.previousScroll !== position) {
      const difference = scrollInfo.previousScroll - position;
      if (difference < 0) {
        setScrollInfo({
          scrollUp: false,
          previousScroll: position,
        });
      } else {
        setScrollInfo({
          scrollUp: true,
          previousScroll: position,
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollInfo]);

  return (
    <div
      className={` ${
        scrollInfo.scrollUp ? "opacity-100" : "opacity-0"
      } fixed z-10 h-screen w-screen opacity-100 transition-opacity duration-200 ease-in `}
    >
      <div className="flex h-[5.5%] flex-grow justify-center bg-black ">
        <div className="font-anton text-5xl text-white">LAZYNAIRE</div>
      </div>

      <div className="flex h-[5.5%] flex-grow flex-row items-center justify-center space-x-16 bg-custom-theme-purple">
        <NavItem text={"HOME"} textLink={"#"} />
        <NavItem text={"EXPLORE"} textLink={"#"} />
        <NavItem text={"CORE"} textLink={"#"} />
        <NavItem text={"ROADMAP"} textLink={"#"} />
        <NavItem text={"TEAM"} textLink={"#"} />
        <NavItem text={"FAQ"} textLink={"#"} />
        <NavItem text={"MINT"} textLink={"#"} />
      </div>

      <div className="absolute bottom-5 w-full ">
        <div className="flex flex-row items-center justify-center space-x-6">
          <a
            className="rounded-full bg-custom-theme-purple p-2"
            href="https://twitter.com/"
          >
            <SiTwitter size={30} color={"white"} />
          </a>
          <a
            className="rounded-full bg-custom-theme-purple p-2"
            href="https://discord.com/"
          >
            <SiDiscord size={30} color={"white"} />
          </a>

          <a
            className="rounded-full bg-custom-theme-purple p-2"
            href="https://www.instagram.com/"
          >
            <RiInstagramFill size={30} color={"white"} />
          </a>
          <a className="rounded-full bg-custom-theme-purple p-2" href="#">
            <MdEmail size={30} color={"white"} />
          </a>
          <a
            className=" rounded-full bg-custom-theme-purple p-2"
            href="https://open.spotify.com/"
          >
            <SiSpotify size={30} color={"white"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
