const BlackBgWithImg = ({ userDevice, imgPath }) => {

    return (
        <div className="bg-black">
            <img
                className=" w-full "
                src={`/images/new_temp_images/${userDevice}/${imgPath}`}
                alt="car_pink"
            />

        </div>
    )

}


export default BlackBgWithImg