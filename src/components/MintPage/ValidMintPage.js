import MintAmount from "./MintAmount";
import Phases from "./Phases";
import TotalMinted from "./TotalMinted";

import { useContractReads } from "wagmi";
import { contractAddress, defAbi } from "../../utils/utils";
import { useAccount } from "wagmi";

const ValidMintPage = ({ confirmingTransac, setConfirmingTransac }) => {
    let phaseIndex = 0;
    const { address } = useAccount();
    const { data, isError, isLoading, refetch } = useContractReads({
        contracts: [
            {
                address: contractAddress,
                abi: defAbi,
                functionName: "getCurrentPhase",
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

        phaseIndex = data[0][0];
    }

    return (
        <>
            <Phases setConfirmingTransac={setConfirmingTransac} />
            <TotalMinted />

            <MintAmount
                confirmingTransac={confirmingTransac}
                setConfirmingTransac={setConfirmingTransac}
                phaseIndex={phaseIndex}
            />
        </>
    );
};

export default ValidMintPage;
