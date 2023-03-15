import { useState } from "react";

const LoadingPage = ({ loading }) => {
    const [loadingHidden, setLoadingHidden] = useState("");

    if (!loading) {
        //Ensure element change property to hidden upon completing fade out effect
        setTimeout(() => {
            setLoadingHidden("hidden");
        }, 1500);
    }

    return (
        <div
            className={`${
                loading ? "" : "animate-fadeOutAniLoading"
            } ${loadingHidden} absolute top-0 z-50 h-full w-full overflow-hidden bg-black`}
        >
            <div className="absolute top-0  h-[200vh] w-full bg-black"></div>
            <div className="relative flex h-full w-full items-center justify-center bg-cover bg-center mobile:bg-about_bg_img_mobile tablet:bg-about_bg_img_tablet laptop:bg-about_bg_img_laptop">
                <div>
                    <div
                        className="animate-spin rounded-full  border-[12px] border-double border-gray-300 border-t-transparent mobile:h-14 mobile:w-14 tablet:h-24
                        tablet:w-24 laptop:h-24 laptop:w-24 "
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
