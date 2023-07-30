import { useAccount, useNetwork } from "wagmi";
import { useState } from "react";
import { switchNetwork } from "@wagmi/core";

import ConnectWalletButton from "./ConnectWalletButton";
import TransactionConfirm from "./TransactionConfirm";
import ValidMintPage from "./ValidMintPage";

const MintConnectWalletPage = () => {
    //Page solely as landing page for user to connect their wallet.
    //Once connected, it will render ValidMintPage which contains all the buttons and interface
    let { chain } = useNetwork();
    const { isConnected } = useAccount();
    const [confirmingTransac, setConfirmingTransac] = useState(0);

    const handleSwitchNetworkButton = () => {
        const network = switchNetwork({ chainId: 5 });
        chain = network;
    };

    let mintAmountPanel = "";
    if (chain === undefined) {
        mintAmountPanel = "";
    } else {
        if (isConnected && chain.name === "Goerli") {
            mintAmountPanel = (
                <ValidMintPage
                    confirmingTransac={confirmingTransac}
                    setConfirmingTransac={setConfirmingTransac}
                />
            );
        }
        if (chain.name !== "Goerli") {
            //connected but chain is wrong
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
                className={`relative flex h-screen w-full flex-col items-center justify-center bg-about_bg_img_laptop bg-cover bg-center mobile:overflow-scroll tablet:overflow-hidden laptop:overflow-hidden`}
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
                    {mintAmountPanel}
                    {!isConnected && <ConnectWalletButton />}
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

export default MintConnectWalletPage;
