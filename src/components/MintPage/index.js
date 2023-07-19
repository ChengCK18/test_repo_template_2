import MintConnectWalletPage from "./MintConnectWalletPage";
import { WagmiConfig } from "wagmi";
import { wagmiClient } from "../../utils/utils";
import { projectId, ethereumClient } from "../../utils/utils";
import { Web3Modal } from "@web3modal/react";

const MintPage = () => {
    return (
        <WagmiConfig client={wagmiClient}>
            <MintConnectWalletPage />
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </WagmiConfig>
    );
};

export default MintPage;
