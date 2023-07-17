import MintPageMain from "./MintPageMain";
import { WagmiConfig } from "wagmi";
import { wagmiClient } from "../../utils";
import { projectId, ethereumClient } from "../../utils";
import { Web3Modal } from "@web3modal/react";

const MintPage = () => {
    return (
        <WagmiConfig client={wagmiClient}>
            <MintPageMain />
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </WagmiConfig>
    );
};

export default MintPage;
