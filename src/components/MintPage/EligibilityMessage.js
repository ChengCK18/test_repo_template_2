import { contractAddress, defAbi } from "../../utils";
import { useContractReads } from "wagmi";

const EligibilityMessage = ({ accountEligiblity, accountBalance }) => {
    let phaseRoman = "";
    let eligibleMessage = "";
    let accountTierString = "";
    let phaseIndex = 0;
    let accountTierIndex = 0;

    const { data, isError, isLoading, refetch, isRefetching } =
        useContractReads({
            contracts: [
                {
                    address: contractAddress,
                    abi: defAbi,
                    functionName: "getCurrentPhase",
                },
            ],
        });

    if (isError) {
        refetch();
    }

    if (!isLoading) {
        if (data[0] === null) {
            refetch();
            return <div className="font-neueHaas text-white">Loading...</div>;
        }
        phaseIndex = data[0][0];
    }

    if (isRefetching) {
        return <div>Loading...</div>;
    }

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
            eligibleMessage = `You're eligible for Phase ${phaseRoman}`;
            break;
        default:
            phaseRoman = "Unknown";
            break;
    }

    switch (accountTierIndex) {
        case 0:
            accountTierString = "OG_HONOURED";
            break;
        case 1:
            accountTierString = "OG";
            break;
        case 2:
            accountTierString = "WL";
            break;
        case 3:
            accountTierString = "ALLOWLIST";
            break;
        default:
            accountTierString = "PUBLIC";
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

                {phaseIndex === 0 && <p>Currently in pre-mint phase</p>}
                {accountBalance <= 0 && (
                    <p>You have already minted max amount</p>
                )}
            </div>
        </div>
    );
};

export default EligibilityMessage;
