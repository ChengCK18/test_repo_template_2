import { useState } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";

const ConnectWalletButton = () => {
    const [loading, setLoading] = useState(false);
    const { open } = useWeb3Modal();
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const label = isConnected ? address : "Connect Wallet";
    let style = "";
    let welcomeMessage = "";

    const onOpen = async () => {
        setLoading(true);
        await open();
        setLoading(false);
    };

    const onClick = () => {
        if (isConnected) {
            disconnect();
        } else {
            onOpen();
        }
    };
    if (!isConnected) {
        style = "bg-white text-custom-theme-purple text-[1.9vh]";
    } else {
        style = "text-white bg-transparent text-[1.7vh]";
    }

    return (
        <div className="relative  mt-6 flex h-[6%] w-full justify-center">
            <button
                disabled={loading}
                onClick={onClick}
                className={`h-full w-[35%] truncate rounded-3xl border-2 border-white px-5 font-neueHaas font-semibold   leading-6 tracking-wider ${style}`}
            >
                {loading ? "Loading..." : label}
            </button>
        </div>
    );
};

export default ConnectWalletButton;
