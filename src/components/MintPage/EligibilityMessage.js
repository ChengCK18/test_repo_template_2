const EligibilityMessage = ({
    accountEligiblity,
    address,
    proof,
    phaseIndex,
    role,
}) => {
    let phaseRoman = "";
    let eligibleMessage = "";
    let accountTierString = "";

    switch (phaseIndex) {
        case 1:
            phaseRoman = "I";
            eligibleMessage = `You're eligible for Phase ${phaseRoman}`;

            break;
        case 2:
            phaseRoman = "II";
            eligibleMessage = `You're eligible for Phase ${phaseRoman}`;
            break;

        case 3:
            phaseRoman = "III";
            eligibleMessage = `You're eligible for Phase ${phaseRoman}, Public Phase`;
            break;
        default:
            phaseRoman = "Unknown";
            break;
    }

    switch (role) {
        case 0:
            accountTierString = "Trillionaire Honored (Super OG).";
            break;
        case 1:
            accountTierString = "Trillionaire (OG).";
            break;
        case 2:
            accountTierString = "Billionaire (WL).";
            break;
        case 3:
            accountTierString = "Millionaire (AL).";
            break;
        default:
            accountTierString = "";
            break;
    }

    if (phaseIndex === 3) {
        accountTierString = "";
    }

    return (
        <div className="mt-6 text-center font-neueHaas font-semibold tracking-wider text-white">
            <div>
                <p>
                    {accountEligiblity || phaseIndex === 0
                        ? "Welcome"
                        : "Sorry"}
                    , {accountTierString}
                </p>
                <p>
                    {accountEligiblity | (phaseIndex === 0) //Pre mint
                        ? `${eligibleMessage}`
                        : `Sorry, you're not eligible for Phase ${phaseRoman}`}
                </p>

                {phaseIndex === 0 && <p>Please wait for the mint to start.</p>}
                {/* {accountBalance <= 0 && (
                    <p>You have already minted max amount</p>
                )} */}
            </div>
        </div>
    );
};

export default EligibilityMessage;
