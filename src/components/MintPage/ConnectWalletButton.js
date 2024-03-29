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
        <div className="relative  mt-6 flex  w-full justify-center mobile:h-[40px] tablet:h-[55px] ">
            <button
                disabled={loading}
                onClick={onClick}
                className={`h-full  truncate rounded-3xl border-2 border-white px-5 font-neueHaas font-semibold leading-6 tracking-wider   mobile:w-3/4 tablet:w-[45%] laptop:w-[35%] ${style}`}
            >
                {loading ? "Loading..." : label}
            </button>
        </div>
    );
};

export default ConnectWalletButton;
