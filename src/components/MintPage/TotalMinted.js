import { useAccount, useContractReads } from "wagmi";
import { defAbi, contractAddress } from "../../utils";

const TotalMinted = () => {
    let marketMinted = 999;
    let mintSupply = 999;
    const { address } = useAccount();
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
                Something went wrong, we are fixing the issue
            </div>
        );
    }

    if (!isLoading) {
        if (data[0] === null || data[1] === null) {
            return (
                <div className="font-neueHaas text-white">
                    Something went wrong, we are fixing the issue
                </div>
            );
        }
        marketMinted = parseInt(data[0]._hex);
        mintSupply = parseInt(data[1]._hex);
    }

    return (
        <div className="p-4 text-center font-neueHaas text-[36px] font-semibold tracking-wider text-[#01C99B]">
            {marketMinted} / {mintSupply}
        </div>
    );
};

export default TotalMinted;
