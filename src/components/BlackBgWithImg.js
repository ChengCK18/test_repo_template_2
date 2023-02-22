
const BlackBgWithImg = ({ userDevice, imgPath, divId }) => {
    return (
        <div className="bg-black" id={divId}>
            <img
                className=" w-full "
                src={`/images/new_temp_images/${userDevice}/${imgPath}`}
                alt="car_pink"
            />
        </div>
    );
};

export default BlackBgWithImg;

