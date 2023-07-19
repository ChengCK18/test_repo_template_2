import { switchNetwork } from "@wagmi/core";
import { useNetwork } from "wagmi";
import { ethers } from "ethers";
import { defAbi, contractAddress } from "../../utils/utils";

const MintButton = ({
    accountEligiblity,
    mintAmountNum,
    mintCost,
    proof,
    confirmingTransac,
    setConfirmingTransac,
}) => {
    let { chain } = useNetwork();
    let mintClickable = false;
    accountEligiblity = true;
    mintClickable = !(accountEligiblity && mintAmountNum > 0);

    const handleButton = async () => {
        try {
            if (mintAmountNum <= 0) {
                return;
            }

            setConfirmingTransac(1);
            if (chain.name !== "Goerli") {
                const network = await switchNetwork({ chainId: 5 });
                chain = network;
            }

            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftcontract = new ethers.Contract(
                    contractAddress,
                    defAbi,
                    signer
                );
                let parsedMintCost = ethers.utils.formatEther(String(mintCost));

                let nftTxn = await nftcontract.mint(mintAmountNum, proof, {
                    value: ethers.utils.parseEther(parsedMintCost),
                });
                setConfirmingTransac(2);
                console.log("Mining...please wait");
                await nftTxn.wait();
                console.log(`Done, hash => ${nftTxn.hash}`);
                setConfirmingTransac(3);
            }
        } catch (err) {
            console.log("ERROR => ", err);
            setConfirmingTransac(4);
        }
    };
    console.log("confirmingTransac ", confirmingTransac);

    return (
        <div className="relative  flex h-[6%] w-full justify-center">
            <button
                className={`${
                    mintClickable ? "opacity-70" : ""
                } h-full w-[35%] rounded-3xl bg-white font-neueHaas text-[1.9vh] font-semibold  leading-6 tracking-wider text-custom-theme-purple`}
                onClick={handleButton}
                disabled={mintClickable}
            >
                Mint
            </button>
        </div>
    );
};

export default MintButton;
