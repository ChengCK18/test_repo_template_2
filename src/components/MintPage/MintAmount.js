import { useState } from "react";
import { useAccount, useContractReads } from "wagmi";
import { defAbi, contractAddress } from "../../utils/utils";
import EligibilityMessage from "./EligibilityMessage";
import {
    treeProofOgHonoured,
    treeProofOg,
    treeProofWhitelist,
    treeProofAllowlist,
} from "../../utils/utils";

import MintButton from "./MintButton";
import MintAmountCostCalculation from "./MintAmountCostCalculation";
import ConnectWalletButton from "./ConnectWalletButton";

const MintAmount = ({
    confirmingTransac,
    setConfirmingTransac,
    phaseIndex,
    role,
}) => {
    // let { chain } = useNetwork();
    const [mintAmountNum, setMintAmountNum] = useState(0); // What number the user set to mint
    const [mintCost, setMintCost] = useState(0);
    const { address } = useAccount();
    let accountEligiblity = false;
    let maxMintAccBal = 0;
    let proof = [];

    try {
        switch (role) {
            case 0:
                proof = treeProofOgHonoured.getProof([address]);
                break;
            case 1:
                proof = treeProofOg.getProof([address]);
                break;
            case 2:
                proof = treeProofWhitelist.getProof([address]);
                break;
            case 3:
                proof = treeProofAllowlist.getProof([address]);
                break;
            default:
                proof = [];
                break;
        }
    } catch {
        proof = [];
    }

    const { data, isError, isLoading, refetch } = useContractReads({
        contracts: [
            {
                address: contractAddress,
                abi: defAbi,
                functionName: "getMintable",
                args: [address],
            },
            {
                address: contractAddress,
                abi: defAbi,
                functionName: "getMintEligibilityAtCurrentPhase",
                args: [address, proof],
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
        console.log("heyyyy ---- >", data);

        maxMintAccBal = parseInt(data[0]._hex);
        accountEligiblity = data[1];
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
                        {accountEligiblity && (
                            <MintAmountCostCalculation
                                address={address}
                                proof={proof}
                                mintAmountNum={mintAmountNum}
                                mintCost={mintCost}
                                setMintCost={setMintCost}
                            />
                        )}
                    </div>

                    <div className="w-[12%] text-right">ETH</div>
                </div>
            </div>
            <MintButton
                accountEligiblity={accountEligiblity}
                mintAmountNum={mintAmountNum}
                mintCost={mintCost}
                proof={proof}
                confirmingTransac={confirmingTransac}
                setConfirmingTransac={setConfirmingTransac}
            />
            <ConnectWalletButton />
            <EligibilityMessage
                accountEligiblity={accountEligiblity}
                address={address}
                proof={proof}
                phaseIndex={phaseIndex}
                role={role}
            />
        </>
    );
};

export default MintAmount;
