
const BlackBgWithImg = ({ userDevice, imgPath, divId }) => {

    let videoPlayLayout = ""
    if (imgPath === '10_Gallery.png') {
        videoPlayLayout = (

            <div className="z-0 absolute laptop:top-[12%] tablet:top-[13%] mobile:top-[20%] laptop:right-[12%] laptop:w-[45%] mobile:w-full mobile:right-[-25%] h-screen">
                <video className="w-full" muted loop autoPlay>
                    <source src="/videos/product_gallery.mp4" type="video/mp4" />
                </video>

            </div>

        )
    }
    return (
        <div className="bg-black relative overflow-hidden" id={divId}>
            <img
                className="z-10 relative w-full "
                src={`/images/otherPages/${userDevice}/${imgPath}`}
                alt="car_pink"
            />
            {videoPlayLayout}

        </div>
    );
};

export default BlackBgWithImg;

