import { BsArrowRight } from "react-icons/bs";

const HeaderText = ({ userDevice, imgPath }) => {
    let copyrightText = (
        <div className="m-0 h-10 w-full bg-custom-theme-purple text-center tracking-wider ">
            <span className="font-neueHaas text-white mobile:text-[12px] tablet:text-[14px] laptop:text-[16px]">
                Copyright &copy; 2023 Lazynaire{" "}
            </span>
        </div>
    );

    let learnMoreButton = (
        <div className="absolute top-[68%] flex h-[25%] w-full justify-center ">
            <div className="mt-2 ">
                <div className="rounded-lg border border-white p-1 px-4 mobile:text-[1.4vh] tablet:text-[1.6vh] laptop:text-[1.7vh]">
                    <a
                        className="relative z-30 flex items-center text-white"
                        href={"https://linktr.ee/lazynaire"}
                    >
                        <span className="font-neueHaas"> CONTACT US </span>
                        <span className="animate-shakeHorizontal pl-2">
                            <BsArrowRight />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
    return (
        <div className="relative ">
            <img
                className=" w-full "
                src={`/images/otherPages/${userDevice}/${imgPath}`}
                alt="car_pink"
            />
            {imgPath === "13_Unlock.png" && copyrightText}
            {imgPath === "13_Unlock.png" && learnMoreButton}
        </div>
    );
};

export default HeaderText;
