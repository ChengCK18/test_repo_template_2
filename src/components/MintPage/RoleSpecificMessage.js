const RoleSpecificMessage = ({
    role,
    phaseIndex,
    maxMintAccBal,
    mintAmountNum,
}) => {
    let role_message = "";
    switch (role) {
        case 0: // Og Honored
            role_message = "";
            break;
        case 1: // Og
            if (maxMintAccBal - mintAmountNum === 1 && phaseIndex === 1) {
                role_message = "Add 1 more for free!";
            }
            break;
        case 2: // WL
            if (maxMintAccBal - mintAmountNum === 1 && phaseIndex === 2) {
                role_message = "Add 1 more for free!";
            }
            break;
        case 3: // Allowlist
            role_message = "";
            break;
        default:
            role_message = "";
            break;
    }
    if (phaseIndex === 3 || phaseIndex === 0) {
        role_message = "";
    }

    return (
        <div className="mt-1 mb-16 w-full text-center font-neueHaas text-[12px] font-semibold tracking-wide text-white">
            {role_message}
        </div>
    );
};

export default RoleSpecificMessage;
