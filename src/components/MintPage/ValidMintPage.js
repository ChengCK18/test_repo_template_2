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

import TransactionConfirm from "./TransactionConfirm";

const ValidMintPage = ({ confirmingTransac, setConfirmingTransac }) => {
    let phaseIndex = 0;
    let timeEndInUnix = 0;
    let role = 4;
    let marketMinted = 0;
    let mintSupply = 999;
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
        if (data[0] === null || data[1] === null || data[2] === null) {
            refetch();
            return <div className="font-neueHaas text-white">Loading...</div>;
        }

        phaseIndex = data[0][0];
        timeEndInUnix = data[0]["endTime"];
        role = data[1];
        marketMinted = parseInt(data[2][1]._hex);
        mintSupply = parseInt(data[2][0]._hex);
    }

    if (marketMinted >= mintSupply) {
        return (
            <TransactionConfirm
                confirmingTransac={confirmingTransac}
                setConfirmingTransac={setConfirmingTransac}
                mintedOut={true}
            />
        );
    }
    return (
        <>
            <Phases
                setConfirmingTransac={setConfirmingTransac}
                phaseIndex={phaseIndex}
                timeEndInUnix={timeEndInUnix}
            />
            <TotalMinted marketMinted={marketMinted} mintSupply={mintSupply} />

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
