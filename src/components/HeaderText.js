const HeaderText = ({ userDevice, imgPath }) => {
    return (
        <div>
            <img
                className=" w-full "
                src={`/images/otherPages/${userDevice}/${imgPath}`}
                alt="car_pink"
            />
        </div>
    );
};

export default HeaderText;
