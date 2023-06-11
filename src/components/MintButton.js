import { switchNetwork } from "@wagmi/core";
import { useNetwork } from "wagmi";
import { ethers } from "ethers";
import { defAbi, contractAddress } from "../utils";

const MintButton = ({ mintAmountNum, parsedMintCost }) => {
    let { chain } = useNetwork();
    // const [mintAmount, setMintAmount] = useState(1);
    // const [mintPrice, setMintPrice] = useState(0.00001);
    parsedMintCost = parsedMintCost.toFixed(5);
    const strParsedMintCost = parsedMintCost.toString();

    const handleButton = async () => {
        try {
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

                console.log("Initialize payment");
                let nftTxn = await nftcontract.mint(mintAmountNum, {
                    value: ethers.utils.parseEther(strParsedMintCost),
                });

                console.log("Mining...please wait");
                await nftTxn.wait();
                console.log(`Done, hash => ${nftTxn.hash}`);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="relative  flex h-[6%] w-full justify-center">
            <button
                className="h-full w-[35%] rounded-3xl bg-white font-neueHaas text-[1.9vh] font-semibold  leading-6 tracking-wider text-custom-theme-purple"
                onClick={handleButton}
            >
                Mint
            </button>
        </div>
    );
};

export default MintButton;
