import { defAbi, contractAddress } from "../../utils/utils";
import { useContractReads } from "wagmi";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const MintAmountCostCalculation = ({
    address,
    proof,
    mintAmountNum,
    mintCost,
    setMintCost,
}) => {
    const [priceData, setPriceData] = useState();

    useEffect(() => {
        if (mintCost !== priceData) {
            setMintCost(priceData);
        }
    }, [priceData]);

    const { data, isError, isLoading, refetch, isRefetching } =
        useContractReads({
            contracts: [
                {
                    address: contractAddress,
                    abi: defAbi,
                    functionName: "calculateTotalMintPrice",
                    args: [address, mintAmountNum, proof],
                },
            ],
        });

    if (isError) {
        refetch();
    }

    if (!isLoading) {
        if (data[0] === null) {
            refetch();
            return <div className="font-neueHaas text-white">Loading...</div>;
        }

        const newPrice = ethers.utils.formatEther(
            String(parseInt(data[0]._hex, 16))
        );

        if (newPrice !== priceData) {
            setPriceData(newPrice);
        }
    }

    if (isRefetching) {
        return <div>Calculating...</div>;
    }

    return <div>{mintCost}</div>;
};

export default MintAmountCostCalculation;
