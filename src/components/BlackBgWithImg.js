
const BlackBgWithImg = ({ userDevice, imgPath, divId }) => {

    let videoPlayLayout = ""
    if (imgPath === '10_Gallery.png') {
        videoPlayLayout = (
            <div className="z-50 absolute laptop:top-[15%] tablet:top-[20%] mobile:top-[25%] right-0 w-[36%] h-screen">
                <video className="w-full" muted loop autoPlay>
                    <source src="/videos/product_gallery.mp4" type="video/mp4" />
                </video>

            </div>
        )
    }
    return (
        <div className="bg-black relative " id={divId}>
            <img
                className=" w-full "
                src={`/images/otherPages/${userDevice}/${imgPath}`}
                alt="car_pink"
            />
            {videoPlayLayout}

        </div>
    );
};

export default BlackBgWithImg;

