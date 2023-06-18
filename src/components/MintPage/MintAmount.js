import { useState } from "react";
import { useAccount, useContractReads } from "wagmi";
import { defAbi, contractAddress } from "../../utils";

import MintButton from "./MintButton";

const MintAmount = ({ confirmingTransac, setConfirmingTransac }) => {
    // let { chain } = useNetwork();
    const [maxMintAccBal, setMaxMintAccBal] = useState(3); // How much the account can mint left
    const [mintAmountNum, setMintAmountNum] = useState(1); // What number the user set to mint
    const { address } = useAccount();
    let parsedMintCost = -1;

    const { data, isError, isLoading } = useContractReads({
        contracts: [
            {
                address: contractAddress,
                abi: defAbi,
                functionName: "balanceOf",
                args: [address],
            },
            {
                address: contractAddress,
                abi: defAbi,
                functionName: "totalSupply",
            },
        ],
    });

    if (isError) {
        return (
            <div className="font-neueHaas text-white">
                sssssSomething went wrong, we are fixing the issue
            </div>
        );
    }

    if (!isLoading) {
        if (data[0] === null) {
            return (
                <div className="font-neueHaas text-white">
                    Something went wrong, we are fixing the issue
                </div>
            );
        }

        parsedMintCost = parseInt(data[0]._hex);
        parsedMintCost = mintAmountNum * 0.00001;
    }
    if (isLoading) {
        return <div>Switching network</div>;
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

                    <div className="w-[45%] text-center">
                        {parsedMintCost.toFixed(5)}
                    </div>

                    <div className="w-[12%] text-right">ETH</div>
                </div>
            </div>
            <MintButton
                mintAmountNum={mintAmountNum}
                parsedMintCost={parsedMintCost}
                confirmingTransac={confirmingTransac}
                setConfirmingTransac={setConfirmingTransac}
            />
        </>
    );
};

export default MintAmount;
