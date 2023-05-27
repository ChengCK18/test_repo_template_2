import { useAccount, WagmiConfig } from "wagmi";
import { wagmiClient, projectId, ethereumClient } from "../utils";
import { Web3Modal } from "@web3modal/react";
import ConnectWalletButton from "./ConnectWalletButton";
import MintButton from "./MintButton";

const MintPage = () => {
    const { isConnected } = useAccount();
    const accountTier = "Trillionaire"; //Get from ABI
    const accountEligiblity = true; // Get from ABI
    const phase = 1; //Get from ABI

    let phaseRoman = "";

    switch (phase) {
        case 1:
            phaseRoman = "I";
            break;
        case 2:
            phaseRoman = "II";
            break;
        case 3:
            phaseRoman = "III";
            break;
        case 4:
            phaseRoman = "IV";
            break;
        default:
            break;
    }

    return (
        <div className="relative flex h-screen w-full flex-col justify-center bg-about_bg_img_laptop">
            <WagmiConfig client={wagmiClient}>
                {isConnected ? <MintButton /> : ""}
                <ConnectWalletButton />
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />

            <div className="mt-6 text-center font-neueHaas font-semibold text-white">
                {isConnected ? (
                    <>
                        <p>Welcome, {accountTier}</p>
                        <p>
                            {accountEligiblity
                                ? `You're eligible for Phase ${phaseRoman}`
                                : `Sorry, you're not eligible for Phase ${phaseRoman}`}
                        </p>
                    </>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default MintPage;
