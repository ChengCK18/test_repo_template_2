import MintAmount from "./MintAmount";
import Phases from "./Phases";
import TotalMinted from "./TotalMinted";

import { useContractReads } from "wagmi";
import { contractAddress, defAbi } from "../../utils/utils";
import { useAccount } from "wagmi";

import {
    treeProofOgHonoured,
    treeProofOg,
    treeProofWhitelist,
    treeProofAllowlist,
} from "../../utils/utils";

const ValidMintPage = ({ confirmingTransac, setConfirmingTransac }) => {
    let phaseIndex = 0;
    let timeEndInUnix = 0;
    let role = 4;
    const { address } = useAccount();

    let proofList = [];
    try {
        proofList.push(treeProofOgHonoured.getProof([address]));
    } catch {
        proofList.push([]);
    }
    try {
        proofList.push(treeProofOg.getProof([address]));
    } catch {
        proofList.push([]);
    }
    try {
        proofList.push(treeProofWhitelist.getProof([address]));
    } catch {
        proofList.push([]);
    }
    try {
        proofList.push(treeProofAllowlist.getProof([address]));
    } catch {
        proofList.push([]);
    }

    const { data, isError, isLoading, refetch } = useContractReads({
        contracts: [
            {
                address: contractAddress,
                abi: defAbi,
                functionName: "getCurrentPhase",
            },
            {
                address: contractAddress,
                abi: defAbi,
                functionName: "getRoleFromProofs",
                args: [address, proofList],
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
        timeEndInUnix = data[0]["endTime"];
        role = data[1];
    }

    return (
        <>
            <Phases
                setConfirmingTransac={setConfirmingTransac}
                phaseIndex={phaseIndex}
                timeEndInUnix={timeEndInUnix}
            />
            <TotalMinted />

            <MintAmount
                confirmingTransac={confirmingTransac}
                setConfirmingTransac={setConfirmingTransac}
                phaseIndex={phaseIndex}
                role={role}
            />
        </>
    );
};

export default ValidMintPage;
