import { useState, useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

const ModuleIntroPage = ({ userDevice }) => {
    const [introSegment, setIntroSegment] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [lazyverseToggle, setLazyverseToggle] = useState(false);
    const lazyverseVidRef = useRef(null);

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
        <div className={`relative w-full bg-black`}>
            <div className={` relative flex w-full justify-center  `}>
                <img
                    className={`laptop:w-full ${
                        userDevice === "mobile" ? "w-full" : "h-full"
                    }`}
                    src={`/images/otherPages/${userDevice}/06_Club.png`}
                    alt="06_Club.png"
                />
                <div className="absolute h-full w-full text-white ">
                    <div
                        className={`absolute top-[8%] left-0 right-0 mx-auto text-center leading-tight mobile:w-[50%] mobile:text-[16px] tablet:w-[45%] tablet:text-[1.6vh] laptop:w-[25%] laptop:text-[2vh]`}
                    >
                        <div className="mb-2 font-libreBas">CLUB </div>
                        <span className="font-libreBas ">
                            A hub for the community from Web 2 and Web 3, with
                            similar visions and interests.
                        </span>
                        <div className="mt-2 flex justify-center">
                            <div className="rounded-lg border border-white p-1 px-4 mobile:text-[14px] tablet:text-[1.6vh] laptop:text-[1.7vh]">
                                <a
                                    className="relative z-30 flex items-center"
                                    href={"https://discord.gg/qmWZ5pwj"}
                                >
                                    <span className="font-neueHaas">
                                        {" "}
                                        JOIN US{" "}
                                    </span>
                                    <span className="animate-shakeHorizontal pl-2">
                                        <BsArrowRight />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={` relative flex  w-full justify-center`}>
                <img
                    className={`laptop:w-full ${
                        userDevice === "mobile" ? "w-full" : "h-full"
                    }`}
                    src={`/images/otherPages/${userDevice}/07_Studio.png`}
                    alt="07_Studio.png"
                />

                <div className=" absolute h-full w-full text-white ">
                    <div
                        className={`absolute top-[8%] left-0 right-0 mx-auto text-center leading-tight mobile:w-[70%] mobile:text-[16px] tablet:w-[45%] tablet:text-[1.6vh] laptop:w-[29%] laptop:text-[2vh]`}
                    >
                        <div className="mb-2 font-libreBas">STUDIO </div>
                        <span className="font-libreBas leading-tight">
                            The masterminds behind Lazynaire, formed by a group
                            of creative souls who love original lifestyle
                            products and contents. They execute all the main
                            utilities, facilitate partnership & collaboration
                            programs.
                        </span>
                        <br />
                        <div className="mt-2 flex justify-center">
                            <div className="rounded-lg border border-white p-1 px-4 mobile:text-[14px] tablet:text-[1.6vh] laptop:text-[1.7vh]">
                                <a
                                    className="relative z-30 flex items-center"
                                    href={"https://linktr.ee/lazynaire"}
                                >
                                    <span className="font-neueHaas">
                                        COLLAB
                                    </span>
                                    <span className="animate-shakeHorizontal pl-2">
                                        <BsArrowRight />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={` relative flex w-full justify-center`}>
                <img
                    className={`laptop:w-full ${
                        userDevice === "mobile" ? "w-full" : "h-full"
                    }`}
                    src={`/images/otherPages/${userDevice}/08_Market.png`}
                    alt="08_Market.png"
                />

                <div className=" absolute h-full w-full text-white ">
                    <div
                        className={`absolute top-[8%] left-0 right-0 mx-auto text-center leading-tight mobile:w-[70%] mobile:text-[16px] tablet:w-[45%] tablet:text-[1.6vh] laptop:w-[29%] laptop:text-[2vh]`}
                    >
                        <div className="mb-2 font-libreBas">MARKET </div>
                        <span className="font-libreBas ">
                            Home to all Lazynaire products distribution.
                            Lazynaire Market is our sales channel responsible
                            for all products sales, exchanges and Holder-only
                            claims.
                            <br />
                        </span>
                        <div className="mt-2 flex justify-center">
                            <div className="rounded-lg border border-white p-1 px-4 mobile:text-[14px] tablet:text-[1.6vh] laptop:text-[1.7vh]">
                                <button
                                    className="relative z-30 flex items-center"
                                    onClick={() => console.log("hey")}
                                >
                                    <span className="font-neueHaas">
                                        {" "}
                                        COMING SOON{" "}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={` relative flex  w-full justify-center`}>
                <img
                    className={`laptop:w-full ${
                        userDevice === "mobile" ? "w-full" : "h-full"
                    }`}
                    src={`/images/otherPages/${userDevice}/09_Lazyverse.png`}
                    alt="09_Lazyverse.png"
                />

                <div className="  absolute h-full w-full text-white ">
                    <div
                        className={`absolute top-[8%] left-0 right-0 mx-auto text-center leading-tight mobile:w-[70%] mobile:text-[16px] tablet:w-[45%] tablet:text-[1.6vh] laptop:w-[36%] laptop:text-[2vh]`}
                    >
                        <div className="mb-2 font-libreBas">LAZYVERSE </div>
                        <span className="font-libreBas">
                            Our future hub as we grow big. Lazyverse is a
                            digital space that connect community around the
                            globes, while fully utilizing potential and
                            advantages of blockchain.
                        </span>
                        <br />
                        <div className="mt-2 flex justify-center">
                            <div className="rounded-lg border border-white p-1 px-4 mobile:text-[14px] tablet:text-[1.6vh] laptop:text-[1.7vh]">
                                <button
                                    className="relative z-30 flex items-center"
                                    onClick={() => {
                                        if (lazyverseVidRef.current) {
                                            lazyverseVidRef.current.src =
                                                // eslint-disable-next-line no-self-assign
                                                lazyverseVidRef.current.src; // Reload the iframe source to start the video
                                        }
                                        setLazyverseToggle(true);
                                    }}
                                >
                                    <span className="font-neueHaas">
                                        WATCH FULL VIDEO
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={` z-30 ${
                        lazyverseToggle ? "absolute" : "hidden"
                    } top-0 flex justify-start`}
                >
                    <iframe
                        ref={lazyverseVidRef}
                        width={window.innerWidth * 0.8}
                        height={window.innerHeight * 0.8}
                        src="https://www.youtube.com/embed/yA_fKvPhQYg?enablejsapi=1&controls=0"
                        title="Lazyverse by Lazynaire"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>

                    <div className="ml-3">
                        <button
                            onClick={() => {
                                const iframe = lazyverseVidRef.current;
                                iframe.contentWindow.postMessage(
                                    JSON.stringify({
                                        event: "command",
                                        func: "stopVideo",
                                    }),
                                    "*"
                                );

                                setLazyverseToggle(false);
                            }}
                            className="rounded-xl border-2 border-white p-2 font-extrabold text-white"
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleIntroPage;
