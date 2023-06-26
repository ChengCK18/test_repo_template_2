import { useAccount, WagmiConfig, useNetwork } from "wagmi";
import { useState } from "react";
import { switchNetwork } from "@wagmi/core";
import { wagmiClient, projectId, ethereumClient } from "../../utils";
import { Web3Modal } from "@web3modal/react";

import Phases from "./Phases";
import TotalMinted from "./TotalMinted";
import ConnectWalletButton from "./ConnectWalletButton";
import MintAmount from "./MintAmount";
import TransactionConfirm from "./TransactionConfirm";
import EligibilityMessage from "./EligibilityMessage";

const MintPage = () => {
    let { chain } = useNetwork();
    const { isConnected } = useAccount();
    const [confirmingTransac, setConfirmingTransac] = useState(0);
    const accountEligiblity = true; // Get from ABI
    const accountTierIndex = 1; //Get from ABI (1= Trillionaire, 2=billionaire, et cetera)
    const phaseIndex = 3; //Get from ABI

    const handleSwitchNetworkButton = () => {
        const network = switchNetwork({ chainId: 5 });
        chain = network;
    };

    let mintAmountPanel = "";
    if (chain === undefined) {
        mintAmountPanel = "";
    } else {
        if (isConnected && accountEligiblity && chain.name === "Goerli") {
            mintAmountPanel = (
                <>
                    <Phases />
                    <TotalMinted />
                    <MintAmount
                        confirmingTransac={confirmingTransac}
                        setConfirmingTransac={setConfirmingTransac}
                    />
                </>
            );
        }
        if (chain.name !== "Goerli") {
            mintAmountPanel = (
                <div className="mt-10 flex h-[80px] w-full flex-col items-center justify-center text-center  font-neueHaas font-semibold leading-6 tracking-wider">
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
        <>
            <div
                className={`relative flex h-screen w-full flex-col items-center justify-center bg-about_bg_img_laptop bg-cover bg-center `}
            >
                <div
                    className={`absolute top-0 h-10 w-full bg-black text-center font-anton text-[3.3vh] tracking-wider text-white`}
                >
                    <a href="/">LAZYNAIRE</a>
                </div>
                <div
                    className={`flex h-full w-full flex-col items-center justify-center ${
                        confirmingTransac > 0 ? "invisible" : ""
                    }`}
                >
                    <WagmiConfig client={wagmiClient}>
                        {mintAmountPanel}
                        <ConnectWalletButton />
                    </WagmiConfig>
                    <Web3Modal
                        projectId={projectId}
                        ethereumClient={ethereumClient}
                    />

                    {isConnected && (
                        <EligibilityMessage
                            phaseIndex={phaseIndex}
                            accountTierIndex={accountTierIndex}
                            accountEligiblity={accountEligiblity}
                        />
                    )}
                </div>
            </div>

            {confirmingTransac > 0 && (
                <TransactionConfirm
                    confirmingTransac={confirmingTransac}
                    setConfirmingTransac={setConfirmingTransac}
                />
            )}
        </>
    );
};

export default MintPage;
