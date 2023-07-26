import { useContractReads } from "wagmi";
import { defAbi, contractAddress } from "../../utils/utils";

const TotalMinted = () => {
    let marketMinted = 999;
    let mintSupply = 999;
    const { data, isError, isLoading, refetch, isRefetching } =
        useContractReads({
            contracts: [
                {
                    address: contractAddress,
                    abi: defAbi,
                    functionName: "getSupplyInfo",
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

        marketMinted = parseInt(data[0][1]._hex);
        mintSupply = parseInt(data[0][0]._hex);
    }
    if (isRefetching) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 text-center font-neueHaas text-[36px] font-semibold tracking-wider text-[#01C99B]">
            {marketMinted} / {mintSupply}
        </div>
    );
};

export default TotalMinted;
