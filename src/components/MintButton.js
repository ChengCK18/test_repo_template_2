import {
    getAccount,
    readContract,
    fetchSigner,
    switchNetwork,
} from "@wagmi/core";
import { useState } from "react";
import { useNetwork } from "wagmi";
import { ethers } from "ethers";
import { defAbi, contractAddress } from "../utils";

const MintButton = () => {
    let { chain, _ } = useNetwork();
    const [mintAmount, setMintAmount] = useState(1);
    const [mintPrice, setMintPrice] = useState(0.00001);

    const handleButton = async () => {
        try {
            const userAddr = await getAccount().address;
            const signer = await fetchSigner();

            if (chain.name !== "Goerli") {
                const network = await switchNetwork({ chainId: 5 });
                chain = network;
            }

            const data = await readContract({
                address: "0xB2F1DfbdEef238b8afB6d276Cd7058D7a2c644Fb",
                abi: defAbi,
                functionName: ["balanceOf"],
                args: [userAddr],
            });
            console.log(data);
            console.log(userAddr);
            console.log(signer);

            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftcontract = new ethers.Contract(
                    contractAddress,
                    defAbi,
                    signer
                );
                // const userBalance = await nftcontract.balanceOf(
                //     signer.getAddress()
                // );

                // //const totalNftCost = await nftcontract.getPrice(); //Given 1)mint amount 2)wallet address

                // console.log("Price => ", totalSupplyDisplay);
                // setTotalSupply(totalSupplyDisplay);

                console.log("Initialize payment");
                let nftTxn = await nftcontract.mint(mintAmount, {
                    value: ethers.utils.parseEther(mintPrice.toString()),
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
