import { useState } from "react";
import { useAccount, useContractReads } from "wagmi";
import { defAbi, contractAddress } from "../../utils";
import MintButton from "./MintButton";
import { treeProof } from "../../utils";
import { ethers } from "ethers";

const MintAmount = ({ confirmingTransac, setConfirmingTransac }) => {
    // let { chain } = useNetwork();
    const [mintAmountNum, setMintAmountNum] = useState(1); // What number the user set to mint
    const { address } = useAccount();
    let parsedMintCost = 0;
    let maxMintAccBal = 0;

    let proof = "";

    try {
        proof = treeProof.getProof([address]);
    } catch {
        proof = [];
    }

    const { data, isError, isLoading, refetch, isRefetching } =
        useContractReads({
            contracts: [
                {
                    address: contractAddress,
                    abi: defAbi,
                    functionName: "calculateTotalMintPrice",
                    args: [address, mintAmountNum, proof],
                },
                {
                    address: contractAddress,
                    abi: defAbi,
                    functionName: "getMintable",
                    args: [address],
                },
            ],
        });

    if (isError) {
        refetch();
    }

    if (!isLoading) {
        if (data[0] === null || data[1] === null) {
            refetch();
            return <div className="font-neueHaas text-white">Loading...</div>;
        }

        parsedMintCost = ethers.utils.formatEther(String(data[0]._hex));
        maxMintAccBal = parseInt(data[1]._hex);
    }

    if (isRefetching) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="mb-16 flex h-[120px] w-[455px] flex-col justify-center rounded-2xl border-2 border-white px-4 py-1 font-neueHaas text-[21px] font-semibold text-red-50">
                <div className="flex h-1/2 w-full flex-row items-center border-b-2 ">
                    <div className="w-[40%]">Amount</div>
                    <div className="w-[15%] text-center">
                        <button
                            onClick={() => {
                                const newNum = mintAmountNum - 1;
                                if (newNum >= 0) {
                                    setMintAmountNum(newNum);
                                }
                            }}
                        >
                            -
                        </button>
                    </div>
                    <div className="w-[15%] text-center">{mintAmountNum}</div>
                    <div className="w-[15%] text-center">
                        <button
                            onClick={() => {
                                const newNum = mintAmountNum + 1;
                                if (newNum <= maxMintAccBal) {
                                    setMintAmountNum(newNum);
                                }
                            }}
                        >
                            +
                        </button>
                    </div>
                    <div className="w-[12%] text-right">
                        <button
                            className="text-[#01C99B]"
                            onClick={() => {
                                setMintAmountNum(maxMintAccBal);
                            }}
                        >
                            Max
                        </button>
                    </div>
                </div>
                <div className="flex h-1/2 w-full flex-row items-center">
                    <div className="w-[40%]">Total</div>

                    <div className="w-[45%] text-center">{parsedMintCost}</div>

                    <div className="w-[12%] text-right">ETH</div>
                </div>
            </div>
            <MintButton
                mintAmountNum={mintAmountNum}
                parsedMintCost={parsedMintCost}
                proof={proof}
                confirmingTransac={confirmingTransac}
                setConfirmingTransac={setConfirmingTransac}
            />
        </>
    );
};

export default MintAmount;
