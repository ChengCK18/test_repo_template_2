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
    phaseIndex,
}) => {
    let { chain } = useNetwork();
    let mintEnableButton = false;

    mintEnableButton = !(
        accountEligiblity &&
        mintAmountNum > 0 &&
        phaseIndex !== 0
    );

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
                let parsedMintCost = mintCost;

                let nftTxn = await nftcontract.mint(mintAmountNum, proof, {
                    value: ethers.utils.parseEther(parsedMintCost),
                });
                setConfirmingTransac(2);
                console.log("Minting...please wait");
                await nftTxn.wait();
                console.log(`Done, hash => ${nftTxn.hash}`);
                setConfirmingTransac(3);
            }
        } catch (err) {
            console.log("ERROR => ", err);
            setConfirmingTransac(4);
        }
    };

    return (
        <div className="relative flex h-[6%] w-full justify-center">
            <button
                className={`${
                    mintEnableButton ? "opacity-70" : ""
                } h-full rounded-3xl bg-white font-neueHaas text-[1.9vh] font-semibold leading-6 tracking-wider  text-custom-theme-purple mobile:w-3/4 tablet:w-[45%] laptop:w-[35%]`}
                onClick={handleButton}
                disabled={mintEnableButton}
            >
                Mint
            </button>
        </div>
    );
};

export default MintButton;
