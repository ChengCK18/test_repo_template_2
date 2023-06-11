import { useAccount, WagmiConfig, useNetwork } from "wagmi";
import { switchNetwork } from "@wagmi/core";
import { wagmiClient, projectId, ethereumClient } from "../utils";
import { Web3Modal } from "@web3modal/react";

import Countdown from "./Countdown";
import TotalMinted from "./TotalMinted";
import ConnectWalletButton from "./ConnectWalletButton";
import MintButton from "./MintButton";
import MintAmount from "./MintAmount";

const MintPage = () => {
    let { chain } = useNetwork();
    const { isConnected } = useAccount();
    const accountEligiblity = true; // Get from ABI
    const accountTierIndex = 1; //Get from ABI (1= Trillionaire, 2=billionaire, et cetera)
    const phaseIndex = 3; //Get from ABI

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

    const handleSwitchNetworkButton = () => {
        const network = switchNetwork({ chainId: 5 });
        chain = network;
    };

    let mintAmountPanel = "";
    if (chain === undefined) {
        mintAmountPanel = "";
    } else {
        if (isConnected && accountEligiblity && chain.name === "Goerli") {
            mintAmountPanel = <MintAmount />;
        }
        if (chain.name !== "Goerli") {
            mintAmountPanel = (
                <div className="flex h-[80px] w-full flex-col items-center justify-center text-center  font-neueHaas font-semibold leading-6 tracking-wider">
                    <span className="text-white">
                        You need to be in Goerli Network. Please switch to mint
                    </span>
                    <button
                        className=" h-[50px] w-[35%] rounded-3xl  bg-white text-[1.9vh] text-custom-theme-purple"
                        onClick={handleSwitchNetworkButton}
                    >
                        Switch Network
                    </button>
                </div>
            );
        }
    }

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center bg-about_bg_img_laptop bg-cover bg-center">
            <Countdown />
            <TotalMinted />
            <WagmiConfig client={wagmiClient}>
                {mintAmountPanel}
                <ConnectWalletButton />
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />

            <div className="mt-6 text-center font-neueHaas font-semibold tracking-wider text-white">
                {isConnected ? (
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
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default MintPage;
