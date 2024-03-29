import { useState, useEffect } from "react";

const IntroPage = ({ userDevice }) => {
    const [introSegment, setIntroSegment] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    // const easeInCss = "opacity-100 transition-opacity duration-1000 ease-in";
    // const easeOutCss = "opacity-0 transition-opacity duration-1000 ease-out";

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 4 * window.innerHeight) {
            if (introSegment !== 4) {
                setIntroSegment(4);
            }
        } else if (scrollPosition > 3 * window.innerHeight) {
            if (introSegment !== 3) {
                setIntroSegment(3);
            }
        } else if (scrollPosition > 2 * window.innerHeight) {
            if (introSegment !== 2) {
                setIntroSegment(2);
            }
        } else {
            if (introSegment !== 1) {
                setIntroSegment(1);
            }
        }
    }, [scrollPosition, introSegment]);

    return (
        <div className={`relative w-full `}>
            <div className="absolute top-0 -z-10 h-[600vh] w-full">
                <div className="sticky top-0 h-screen w-full bg-cover bg-center mobile:bg-about_bg_img_mobile tablet:bg-about_bg_img_tablet laptop:bg-about_bg_img_laptop"></div>
            </div>
            <div
                className={`relative  flex w-full justify-center`}
                id="section-about"
            >
                <img
                    className={`${
                        userDevice === "mobile" ? "w-full" : "h-full"
                    }`}
                    src={`/images/otherPages/${userDevice}/02_About Us.png`}
                    alt="02_About Us.png"
                />
            </div>

            <div className={`relative   flex  w-full justify-center `}>
                <img
                    className={`${
                        userDevice === "mobile" ? "w-full" : "h-full"
                    }`}
                    src={`/images/otherPages/${userDevice}/03_About_Identity.png`}
                    alt="03_About_Identity.png"
                />
            </div>

            <div
                className={`relative   flex  w-full justify-center  `}
                id="section-roadmap-core"
            >
                <img
                    className={`${
                        userDevice === "mobile" ? "w-full" : "h-full"
                    }`}
                    src={`/images/otherPages/${userDevice}/04_Roadmap.png`}
                    alt="04_Roadmap.png"
                />
            </div>

            <div className={`relative   flex  w-full justify-center  `}>
                <img
                    className={`${
                        userDevice === "mobile" ? "w-full" : "h-full"
                    }`}
                    src={`/images/otherPages/${userDevice}/05_Core.png`}
                    alt="05_Core.png"
                />
            </div>
        </div>
    );
};

export default IntroPage;
