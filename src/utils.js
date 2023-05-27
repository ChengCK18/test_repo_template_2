import Web3ConnectCustButton from "./components/ConnectWalletButton";
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
export const projectId = "cbba414475f0cadd1d582d8c5b7f47dc";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

export const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider,
});
export const ethereumClient = new EthereumClient(wagmiClient, chains);
