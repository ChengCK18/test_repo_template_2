import { SiTwitter, SiDiscord } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { RxDoubleArrowDown } from "react-icons/rx";

import NavItem from "./NavItem";
import MusicCapsule from "./MusicCapsule";

const NavBar = ({ userDevice, bgAudioMusic }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const [scrollInfo, setScrollInfo] = useState({
        scrollUp: true,
        previousScroll: 0,
    });

    useEffect(() => {
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
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollInfo]);

    const handleMobileMenu = () => {
        const inverseShowMobileMenu = !showMobileMenu;
        setShowMobileMenu(inverseShowMobileMenu);
    };

    let headerTitleBar = (
        <>
            <div className="flex min-h-[5.5%] flex-grow  items-center justify-center bg-black mobile:h-[7%] ">
                <div
                    className={`font-anton tracking-wider text-white ${
                        userDevice === "mobile"
                            ? "ml-auto pl-12 text-[3.7vh]"
                            : "text-[3.3vh]"
                    }`}
                >
                    LAZYNAIRE
                </div>
                <div
                    className={`ml-auto pr-3 ${
                        userDevice === "mobile" ? "" : "hidden"
                    }`}
                >
                    <HiMenuAlt4
                        size={30}
                        color={"white"}
                        onClick={handleMobileMenu}
                    />
                </div>
            </div>
        </>
    );
    let mobileNavLayout = (
        <>
            <div
                className={`${
                    showMobileMenu ? "w-screen" : "w-0"
                } transition-slowest ease absolute flex h-full items-center justify-center bg-white opacity-95 transition-width duration-1000`}
            >
                <div
                    className={`${
                        showMobileMenu ? "" : "hidden"
                    } flex h-[80%] w-[90%] border-y-2 border-black`}
                >
                    <div className="flex flex-col justify-start">
                        <NavItem
                            text={"ABOUT"}
                            textLink={"section-about"}
                            userDevice={userDevice}
                        />
                        <NavItem
                            text={"ROADMAP & CORE"}
                            textLink={"section-roadmap-core"}
                            userDevice={userDevice}
                        />
                        <NavItem
                            text={"GALLERY"}
                            textLink={"section-gallery"}
                            userDevice={userDevice}
                        />
                        <NavItem
                            text={"TEAM"}
                            textLink={"section-team"}
                            userDevice={userDevice}
                        />
                        <NavItem
                            text={"MINT"}
                            textLink={"#"}
                            userDevice={userDevice}
                        />
                    </div>
                </div>
                <div className={`absolute top-2 right-2 `}>
                    <AiOutlineClose
                        size={30}
                        color={"black"}
                        onClick={handleMobileMenu}
                    />
                </div>
            </div>
        </>
    );
    let laptopNavLayout = (
        <>
            <div
                className={`${
                    userDevice === "laptop" || userDevice === "tablet"
                        ? ""
                        : "hidden"
                } flex h-[5.5%] flex-grow flex-row items-center justify-center space-x-16 bg-custom-theme-purple`}
            >
                <NavItem
                    text={"ABOUT"}
                    textLink={"section-about"}
                    userDevice={userDevice}
                />
                <NavItem
                    text={"ROADMAP & CORE"}
                    textLink={"section-roadmap-core"}
                    userDevice={userDevice}
                />
                <NavItem
                    text={"GALLERY"}
                    textLink={"section-gallery"}
                    userDevice={userDevice}
                />
                <NavItem
                    text={"TEAM"}
                    textLink={"section-team"}
                    userDevice={userDevice}
                />
                <NavItem text={"MINT"} textLink={"#"} userDevice={userDevice} />
            </div>
        </>
    );

    let footerFloatRedirectIcons = (
        <>
            {" "}
            <div
                className={`absolute bottom-8 z-30 w-full ${
                    showMobileMenu ? "hidden" : ""
                }`}
            >
                <div className="flex w-full flex-row items-center justify-center space-x-6">
                    <a
                        className="rounded-full bg-custom-theme-purple p-2"
                        href=" https://twitter.com/lazynaire_club"
                    >
                        <SiTwitter size={30} color={"white"} />
                    </a>
                    <a
                        className="rounded-full bg-custom-theme-purple p-2"
                        href="https://discord.gg/lazynaireclub"
                    >
                        <SiDiscord size={30} color={"white"} />
                    </a>

                    <a
                        className="rounded-full bg-custom-theme-purple p-2"
                        href="mailto:lazynaire.nft@gmail.com"
                    >
                        <MdEmail size={30} color={"white"} />
                    </a>
                    <MusicCapsule bgAudioMusic={bgAudioMusic} />
                </div>
            </div>
        </>
    );
    const scrollIcon = (
        <div className="tablet: dropTextShadow absolute bottom-0 w-24 rounded-lg p-1 pt-3 text-center font-anton tracking-wide text-white mobile:left-[2%] mobile:text-[2.3vh] tablet:left-[15%] tablet:text-[2.2vh] laptop:text-[2.2vh]">
            SCROLL DOWN
            <div className="mt-3 flex w-full animate-bounce items-center justify-center shadow-custom-theme-purple">
                <RxDoubleArrowDown size={30} />
            </div>
        </div>
    );

    return (
        <div
            className={`fixed inset-0 z-30 h-full w-full ${
                scrollInfo.scrollUp ? "animate-fadeInAni" : "animate-fadeOutAni"
            }`}
        >
            {headerTitleBar}
            {mobileNavLayout}
            {laptopNavLayout}

            {footerFloatRedirectIcons}
            {scrollInfo.previousScroll === 0 ? scrollIcon : ""}
        </div>
    );
};

export default NavBar;
