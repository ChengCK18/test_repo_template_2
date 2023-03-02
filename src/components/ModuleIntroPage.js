import { useState, useEffect } from "react";
import { BsArrowRight } from 'react-icons/bs'

const ModuleIntroPage = ({ userDevice }) => {
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
        <div className={`w-full bg-about_bg_img bg-fixed bg-cover`}>
            <div className={` relative flex w-full justify-end  `}>
                <img
                    className={`${userDevice === 'mobile' ? 'w-full' : 'h-full'}`}
                    src={`/images/otherPages/${userDevice}/06_Club.png`}
                    alt="06_Club.png"
                />
                <div className="absolute text-white h-full w-full ">
                    <div className={`absolute top-[13%] laptop:text-[2vh] tablet:text-[1.6vh] mobile:text-[1.4vh] text-center laptop:w-[25%] tablet:w-[45%] mobile:w-[50%] mx-auto left-0 right-0`}>
                        <div className="font-libreBas mb-2">CLUB </div>
                        <span className="font-libreBas ">
                            A hub for the community from Web 2 and Web 3, with similar visions and interests.
                        </span>
                        <div className="mt-2 flex justify-center">
                            <div className="p-1 px-4 rounded-lg border border-white laptop:text-[1.7vh] tablet:text-[1.6vh] mobile:text-[1.4vh]">
                                <button className="relative z-30 flex items-center" onClick={() => console.log('hey')}>
                                    <span className="font-neueHaas"> JOIN US </span>
                                    <span className="pl-2 animate-shakeHorizontal">
                                        <BsArrowRight />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className={` relative flex  w-full justify-start`}>
                <img
                    className={`${userDevice === 'mobile' ? 'w-full' : 'h-full'}`}
                    src={`/images/otherPages/${userDevice}/07_Studio.png`}
                    alt="07_Studio.png"
                />

                <div className=" absolute text-white h-full w-full ">
                    <div className={`absolute top-[13%] laptop:text-[2vh] tablet:text-[1.6vh] mobile:text-[1.4vh] text-center laptop:w-[29%] tablet:w-[45%] mobile:w-[50%] mx-auto left-0 right-0`}>
                        <div className="font-libreBas mb-2">STUDIO </div>
                        <span className="font-libreBas ">
                            The masterminds behind Lazynaire, formed by a group of creative souls who love original lifestyle products and contents.
                            They execute all the main utilities, facilitate partnership & collaboration programs.
                        </span>
                        <br />
                        <div className="mt-2 flex justify-center">
                            <div className="p-1 px-4 rounded-lg border border-white laptop:text-[1.7vh] tablet:text-[1.6vh] mobile:text-[1.4vh]">
                                <button className="relative z-30 flex items-center" onClick={() => console.log('hey')}>
                                    <span className="font-neueHaas"> COLLAB </span>
                                    <span className="pl-2 animate-shakeHorizontal">
                                        <BsArrowRight />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

            <div className={` relative flex w-full justify-end`}>
                <img
                    className={`${userDevice === 'mobile' ? 'w-full' : 'h-full'}`}
                    src={`/images/otherPages/${userDevice}/08_Market.png`}
                    alt="08_Market.png"
                />

                <div className=" absolute text-white h-full w-full ">
                    <div className={`absolute top-[13%] laptop:text-[2vh] tablet:text-[1.6vh] mobile:text-[1.4vh] text-center laptop:w-[25%] tablet:w-[45%] mobile:w-[50%] mx-auto left-0 right-0`}>
                        <div className="font-libreBas mb-2">MARKET </div>
                        <span className="font-libreBas ">
                            Home to all Lazynaire products distribution. Lazynaire Market is our sales channel responsible for all products sales, exchanges and Holder-only claims.
                            <br />
                        </span>
                        <div className="mt-2 flex justify-center">
                            <div className="p-1 px-4 rounded-lg border border-white laptop:text-[1.7vh] tablet:text-[1.6vh] mobile:text-[1.4vh]">
                                <button className="relative z-30 flex items-center" onClick={() => console.log('hey')}>
                                    <span className="font-neueHaas"> COMING SOON </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={` relative flex  w-full justify-center`}>
                <img
                    className={`${userDevice === 'mobile' ? 'w-full' : 'h-full'}`}
                    src={`/images/otherPages/${userDevice}/09_Lazyverse.png`}
                    alt="09_Lazyverse.png"
                />

                <div className="  absolute text-white h-full w-full ">
                    <div className={`absolute top-[10%] laptop:text-[2vh] tablet:text-[1.6vh] mobile:text-[1.4vh] text-center laptop:w-[36%] tablet:w-[45%] mobile:w-[50%] mx-auto left-0 right-0`}>
                        <div className="font-libreBas mb-2">LAZYVERSE </div>
                        <span className="font-libreBas">
                            Our future hub as we grow big.
                            Lazyverse is a digital space that connect community around the globes, while fully utilizing potential and advantages of blockchain.
                        </span>
                        <br />
                        <div className="mt-2 flex justify-center">
                            <div className="p-1 px-4 rounded-lg border border-white laptop:text-[1.7vh] tablet:text-[1.6vh] mobile:text-[1.4vh]">
                                <button className="relative z-30 flex items-center" onClick={() => console.log('hey')}>
                                    <span className="font-neueHaas"> COMING SOON </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ModuleIntroPage;
