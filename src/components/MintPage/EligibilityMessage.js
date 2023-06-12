const EligibilityMessage = ({
    phaseIndex,
    accountTierIndex,
    accountEligiblity,
}) => {
    let phaseRoman = "";
    let eligibleMessage = "";
    let accountTierString = "";
    switch (phaseIndex) {
        case 0:
            phaseRoman = ""; // pre-mint stage, no message shown
            break;
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
            eligibleMessage = `You're eligible for Phase ${phaseRoman}`;
            break;
        case 4:
            phaseRoman = "IV";
            eligibleMessage = `You're eligible for Phase ${phaseRoman}`;
            break;
        case 5:
            phaseRoman = "Public"; // pre-mint stage, no message shown
            eligibleMessage = `You're eligible for ${phaseRoman} Phase `;
            break;

        case 6:
            phaseRoman = ""; // post-mint stage, no message shown
            break;
        default:
            phaseRoman = "Unknown";
            break;
    }

    switch (accountTierIndex) {
        case 1:
            accountTierString = "Trillionaire";
            break;
        case 2:
            accountTierString = "Billionaire";
            break;
        case 3:
            accountTierString = "Millionaire";
            break;
        case 4:
            accountTierString = "Other";
            break;
        default:
            accountTierString = "Public";
            break;
    }
    return (
        <div className="mt-6 text-center font-neueHaas font-semibold tracking-wider text-white">
            <div>
                <p>Welcome, {accountTierString}</p>
                <p>
                    {accountEligiblity |
                    (phaseIndex === 0) | //Pre mint
                    (phaseIndex === 6) //Post mint
                        ? `${eligibleMessage}`
                        : `Sorry, you're not eligible for Phase ${phaseRoman}`}
                </p>
            </div>
        </div>
    );
};

export default EligibilityMessage;
