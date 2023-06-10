import { useEffect, useState } from "react";
import { useAccount, useDisconnect, useContractReads } from "wagmi";
import { defAbi, contractAddress } from "../utils";

const MintAmount = () => {
    const [maxMintAccBal, setMaxMintAccBal] = useState(3);
    const [mintAmountNum, setMintAmountNum] = useState(0);
    let parsedCost = 0;
    const { address, isConnected } = useAccount();

    // const { data, isError, isLoading } = useContractRead({
    //     address: contractAddress,
    //     abi: defAbi,
    //     functionName: "balanceOf",
    //     args: [address],
    // });

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

    if (!isLoading) {
        console.log(data);
        console.log(parseInt(data[0]._hex, 16));
    }

    return (
        <div className="mb-16 flex h-[120px] w-[455px] flex-col justify-center rounded-2xl border-2 border-white px-4 py-1 font-neueHaas text-[21px] font-semibold text-red-50">
            <div className="flex h-1/2 w-full flex-row items-center border-b-2 ">
                <div className="w-[40%]">Amount</div>
                <div className="w-[15%] text-center">
                    <button
                        onClick={() => {
                            const newNum = mintAmountNum - 1;
                            if (newNum > 0) {
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

                <div className="w-[45%] text-center">{parsedCost}</div>

                <div className="w-[12%] text-right">ETH</div>
            </div>
        </div>
    );
};

export default MintAmount;
