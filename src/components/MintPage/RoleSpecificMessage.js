const RoleSpecificMessage = ({
    role,
    phaseIndex,
    maxMintAccBal,
    mintAmountNum,
    accountEligiblity,
}) => {
    let role_message = "";
    switch (role) {
        case 0: // Og Honored
            role_message = "";
            break;
        case 1: // Og
            if (maxMintAccBal - mintAmountNum === 1 && phaseIndex === 1) {
                role_message = "Opps, don't forget to add 1 more for free!";
            }
            break;
        case 2: // WL
            if (maxMintAccBal - mintAmountNum === 1 && phaseIndex === 2) {
                role_message = "Opps, don't forget to add 1 more for free!";
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
        // No role specific message for pre-mint and public minting process.
        role_message = "";
    }

    if (maxMintAccBal <= 0 && accountEligiblity) {
        // When user is eligible but they have minted all available mint for their account
        role_message = "Sorry, you have no mint left.";
    }

    return (
        <div className="mt-1 w-full text-center font-neueHaas text-[12px] font-semibold tracking-wide text-white mobile:mb-5 tablet:mb-16">
            {role_message}
        </div>
    );
};

export default RoleSpecificMessage;
