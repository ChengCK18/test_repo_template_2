const RoleSpecificMessage = ({ role, phaseIndex }) => {
    let role_message = "";
    switch (role) {
        case 0:
            role_message = "OG_HONORED asdasdas asdasd sadasd";
            break;
        case 1:
            role_message = "OG";
            break;
        case 2:
            role_message = "WL";
            break;
        case 3:
            role_message = "PUBLICLIST";
            break;
        default:
            role_message = "";
            break;
    }
    if (phaseIndex === 3) {
        role_message = "";
    }

    return (
        <div className="mt-1 mb-16 w-full text-center font-neueHaas text-[12px] font-semibold tracking-wide text-white">
            {role_message}
        </div>
    );
};

export default RoleSpecificMessage;
