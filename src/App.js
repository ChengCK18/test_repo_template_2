import { useState, useEffect } from "react";
import MintButton from "./components/MintButton";
import Web3ConnectCustButton from "./components/Web3ConnectCustButton";
import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig, useNetwork } from "wagmi";
import { arbitrum, goerli, polygon } from "wagmi/chains";
import { useAccount } from "wagmi";

const chains = [arbitrum, goerli, polygon];
const projectId = "cbba414475f0cadd1d582d8c5b7f47dc";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

const App = () => {
    const { isConnected } = useAccount();
    console.log("isConnected => ", isConnected);
    return (
        <>
            <WagmiConfig client={wagmiClient}>
                {isConnected ? <MintButton /> : ""}
                <Web3ConnectCustButton isConnected={isConnected} />
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </>
    );
};
export default App;
