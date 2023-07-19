import { defAbi, contractAddress } from "../../utils/utils";
import { useContractReads } from "wagmi";

const MintAmountCostCalculation = ({
    address,
    proof,
    mintAmountNum,
    mintCost,
    setMintCost,
}) => {
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
        if (mintCost !== data[0]._hex) {
            setMintCost(data[0]._hex);
        }
    }

    if (isRefetching) {
        return <div>Calculating...</div>;
    }

    return <div>{mintCost}</div>;
};

export default MintAmountCostCalculation;
