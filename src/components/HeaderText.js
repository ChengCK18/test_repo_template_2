const HeaderText = ({ userDevice, imgPath }) => {
    return (
        <div>
            <img
                className=" w-full "
                src={`/images/new_temp_images/${userDevice}/${imgPath}`}
                alt="car_pink"
            />
        </div>
    );
};

export default HeaderText;
