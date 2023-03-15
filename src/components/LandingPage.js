const LandingPage = ({ userDevice, setLoading }) => {
    let landingPageLayout = "";

    if (userDevice === "laptop") {
        landingPageLayout = (
            <>
                <div className="absolute flex h-full w-screen justify-center">
                    <img
                        className="h-full w-screen"
                        src="/images/landingPage/Desktop_Back_01.png"
                        alt="Desktop_Back_01"
                    />
                </div>
                <div className="absolute flex h-full w-screen items-end justify-center">
                    <div className={`h-[85%] shrink-0 `}>
                        <img
                            className="h-full "
                            src="/images/landingPage/Desktop_Middle_01_2.png"
                            alt="Desktop_Middle_01"
                        />
                    </div>
                </div>

                <div className="absolute z-20 flex h-full w-screen items-end justify-center">
                    <div className={`h-[78%] shrink-0 `}>
                        <img
                            className="h-full"
                            src="/images/landingPage/Desktop_Front_01.png"
                            alt="Desktop_Middle_01"
                            onLoad={() => {
                                setLoading(false);
                            }}
                        />
                    </div>
                </div>
            </>
        );
    } else if (userDevice === "mobile") {
        landingPageLayout = (
            <>
                <div className="absolute inset-0 flex h-full w-screen items-end justify-center ">
                    <div className="h-[60%]">
                        <img
                            className="h-full object-cover"
                            src="/images/landingPage/Mobile_Back_01.png"
                            alt="car_pink"
                        />
                    </div>
                </div>
                <div className="absolute inset-0 z-20  flex h-full w-screen items-end justify-center">
                    <div className="h-[60%] ">
                        <img
                            className="h-full object-cover"
                            src="/images/landingPage/Mobile_Front_01.png"
                            alt="car_pink"
                        />
                    </div>
                </div>
            </>
        );
    } else if (userDevice === "tablet") {
        landingPageLayout = (
            <>
                <div className="absolute inset-0 flex  h-full w-screen justify-center">
                    <img
                        className="h-full w-screen"
                        src="/images/landingPage/Desktop_Back_01.png"
                        alt="Desktop_Back_01"
                    />
                </div>
                <div className="absolute inset-0 flex h-full w-screen items-end justify-center">
                    <div className={`h-[78%] shrink-0`}>
                        <img
                            className="h-full "
                            src="/images/landingPage/Tablet_Middle_01.png"
                            alt="Desktop_Middle_01"
                        />
                    </div>
                </div>

                <div className="absolute inset-0 z-20  flex h-full w-screen items-end justify-center">
                    <div className={`h-[75%] shrink-0`}>
                        <img
                            className="h-full"
                            src="/images/landingPage/Tablet_Front_01.png"
                            alt="Desktop_Middle_01"
                        />
                    </div>
                </div>
            </>
        );
    }
    return (
        <div className=" relative flex h-screen w-full flex-col overflow-hidden">
            <div className="absolute inset-0  h-full w-full justify-center  text-center">
                <div
                    className={`absolute z-20  ${
                        userDevice === "mobile"
                            ? "bottom-[60vh]"
                            : "bottom-[68vh]"
                    }  w-full bg-white bg-opacity-0 text-center font-anton font-normal leading-none tracking-wider text-custom-theme-purple mobile:text-[10.2vh] laptop:text-[13.8vh]`}
                >
                    <p className={``}>
                        HOME TO {userDevice === "mobile" ? <br /> : ""} ALL.
                    </p>
                </div>
                {landingPageLayout}
            </div>
        </div>
    );
};

export default LandingPage;
