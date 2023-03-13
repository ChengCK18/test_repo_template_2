const BlackBgWithImg = ({ userDevice, imgPath, divId }) => {
    let videoPlayLayout = "";
    let bgLayout = "";

    if (imgPath === "10_Gallery.png") {
        videoPlayLayout = (
            <div className="absolute z-0 h-screen mobile:top-[20%] mobile:right-[-25%] mobile:w-full tablet:top-[13%] laptop:top-[12%] laptop:right-[12%] laptop:w-[45%]">
                <video className="w-full" muted loop autoPlay>
                    <source
                        src="/videos/product_gallery.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        );
    }
    if (imgPath === "12_Team.png") {
        bgLayout = "";
    }
    return (
        <div
            className={`relative overflow-hidden bg-black ${bgLayout}`}
            id={divId}
        >
            <img
                className="relative z-10 w-full "
                src={`/images/otherPages/${userDevice}/${imgPath}`}
                alt="car_pink"
            />
            {videoPlayLayout}
        </div>
    );
};

export default BlackBgWithImg;
