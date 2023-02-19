import { useState, useEffect } from "react";

const IntroPage = ({ userDevice }) => {
    const [introSegment, setIntroSegment] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    // const easeInCss = "opacity-100 transition-opacity duration-1000 ease-in";
    // const easeOutCss = "opacity-0 transition-opacity duration-1000 ease-out";

    const easeInCss = "opacity-100 transition-opacity duration-1000 ease-in";
    const easeOutCss = "opacity-0 transition-opacity duration-1000 ease-out";

    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log("da ", position);
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log(introSegment);
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
    }, [scrollPosition]);

    //     <div className="sticky top-[-0.5px] h-screen">

    //     <div className={`absolute flex h-full w-full justify-center`}>
    //         <img
    //             className="absolute h-full w-full "
    //             src={`/images/new_temp_images/${userDevice}/Standard_Background_Black.png`}
    //             alt="car_pink"
    //         />
    //     </div>

    //  </div>

    return (
        <div className={`w-full bg-about_bg_img bg-fixed `}>
            <div className={`flex h-screen w-full justify-end  `}>
                <img
                    className=" w-full"
                    src={`/images/new_temp_images/${userDevice}/02_About Us.png`}
                    alt="02_About Us.png"
                />
            </div>

            <div className={` flex h-screen w-full justify-start`}>
                <img
                    className=" w-full "
                    src={`/images/new_temp_images/${userDevice}/03_About_Identity.png`}
                    alt="03_About_Identity.png"
                />
            </div>

            <div className={` flex h-screen w-full justify-end`}>
                <img
                    className=" w-full "
                    src={`/images/new_temp_images/${userDevice}/04_Roadmap.png`}
                    alt="04_Roadmap.png"
                />
            </div>

            <div className={` flex h-screen w-full justify-center`}>
                <img
                    className=" w-full "
                    src={`/images/new_temp_images/${userDevice}/05_Core.png`}
                    alt="05_Core.png"
                />
            </div>
        </div>
    );
};

export default IntroPage;
