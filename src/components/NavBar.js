import { SiTwitter, SiDiscord } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";

const NavBar = ({ userDevice }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const [scrollInfo, setScrollInfo] = useState({
        scrollUp: true,
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

    const handleMobileMenu = () => {
        const inverseShowMobileMenu = !showMobileMenu;
        setShowMobileMenu(inverseShowMobileMenu);
    };

    let headerTitleBar = (
        <>
            <div className="flex min-h-[5.5%] flex-grow  items-center justify-center bg-black mobile:h-[7%] ">
                <div
                    className={`font-anton tracking-wider text-white ${userDevice === "mobile"
                        ? "ml-auto pl-12 text-[3.7vh]"
                        : "text-[3.3vh]"
                        }`}
                >
                    LAZYNAIRE
                </div>
                <div
                    className={`ml-auto pr-3 ${userDevice === "mobile" ? "" : "hidden"}`}
                >
                    <HiMenuAlt4 size={30} color={"white"} onClick={handleMobileMenu} />
                </div>
            </div>
        </>
    );
    let mobileNavLayout = (
        <>
            <div
                className={`${showMobileMenu ? "w-screen" : "w-0"
                    } transition-width transition-slowest ease absolute flex h-full opacity-95  items-center justify-center bg-white duration-1000`}
            >
                <div
                    className={`${showMobileMenu ? "" : "hidden"
                        } flex h-[85%] w-[85%] items-center justify-center border-y-2 border-black p-10`}
                >
                    <div className="text-clip text-center font-anton text-[6.3vh] leading-none tracking-wider text-custom-theme-purple">
                        WE'RE
                        <br />{" "}
                        <span className="overflow-hidden whitespace-nowrap ">
                            COMING SOON.
                        </span>
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
                className={`${userDevice === "laptop" || userDevice === "tablet" ? "" : "hidden"
                    } flex h-[5.5%] flex-grow flex-row items-center justify-center space-x-16 bg-custom-theme-purple`}
            >
                <NavItem text={"ABOUT"} textLink={"#"} userDevice={userDevice} />
                <NavItem text={"EXPLORE"} textLink={"#"} userDevice={userDevice} />
                <NavItem text={"CORE"} textLink={"#"} userDevice={userDevice} />
                <NavItem text={"ROADMAP"} textLink={"#"} userDevice={userDevice} />
                <NavItem text={"TEAM"} textLink={"#"} userDevice={userDevice} />
                <NavItem text={"FAQ"} textLink={"#"} userDevice={userDevice} />
                <NavItem text={"MINT"} textLink={"#"} userDevice={userDevice} />
            </div>
        </>
    );

    let footerFloatRedirectIcons = (
        <>
            {" "}
            <div
                className={`absolute bottom-8 z-50 w-full ${showMobileMenu ? "hidden" : ""
                    }`}
            >
                <div className="flex flex-row items-center justify-center space-x-6">
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
                </div>
            </div>
        </>
    );
    return (
        <div
            className={`fixed inset-0 z-50 h-full w-full ${scrollInfo.scrollUp ? "" : "hidden"
                }`}
        >
            {headerTitleBar}
            {mobileNavLayout}
            {laptopNavLayout}
            {footerFloatRedirectIcons}
        </div>
    );
};

export default NavBar;
