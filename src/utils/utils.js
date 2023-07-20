import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createClient } from "wagmi";
import { arbitrum, goerli, polygon } from "wagmi/chains";
import { treeOgHonoured, treeOg, treeWhitelist, treeAllowlist } from "./tree";

const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");

const chains = [arbitrum, goerli, polygon];
export const projectId = "2d2ff768204bdfd16aaabeddd7b9e032";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

export const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider,
});
export const ethereumClient = new EthereumClient(wagmiClient, chains);

// export const contractAddress = "0x62cE60F234944398E2e638a645902479Ff3Ff800";
export const contractAddress = "0x982fbEfEF8C735703E383315F08C56AEB7bd92d6";

export const treeProofOgHonoured = StandardMerkleTree.load(treeOgHonoured);
export const treeProofOg = StandardMerkleTree.load(treeOg);
export const treeProofWhitelist = StandardMerkleTree.load(treeWhitelist);
export const treeProofAllowlist = StandardMerkleTree.load(treeAllowlist);

export const defAbi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "collectionSize_",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "ApprovalCallerNotOwnerNorApproved",
        type: "error",
    },
    {
        inputs: [],
        name: "ApprovalQueryForNonexistentToken",
        type: "error",
    },
    {
        inputs: [],
        name: "BalanceQueryForZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "MintERC2309QuantityExceedsLimit",
        type: "error",
    },
    {
        inputs: [],
        name: "MintToZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "MintZeroQuantity",
        type: "error",
    },
    {
        inputs: [],
        name: "OwnerQueryForNonexistentToken",
        type: "error",
    },
    {
        inputs: [],
        name: "OwnershipNotInitializedForExtraData",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferCallerNotOwnerNorApproved",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferFromIncorrectOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferToNonERC721ReceiverImplementer",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferToZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "URIQueryForNonexistentToken",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "fromTokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "toTokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "ConsecutiveTransfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "enum NotSusProject.Roles",
                name: "_roles",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "merkleRoot",
                type: "bytes32",
            },
        ],
        name: "SetMerkleRoot",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_phase",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "_startTime",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "_endTime",
                type: "uint32",
            },
        ],
        name: "SetPhaseConfig",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldCollectionSize",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "collectionSize_",
                type: "uint256",
            },
        ],
        name: "UpdateCollectionSize",
        type: "event",
    },
    {
        inputs: [],
        name: "OGMintPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "proof_",
                type: "bytes32[]",
            },
            {
                internalType: "address",
                name: "user_",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "root_",
                type: "bytes32",
            },
        ],
        name: "_verify",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount_",
                type: "uint256",
            },
            {
                internalType: "bytes32[]",
                name: "proof_",
                type: "bytes32[]",
            },
        ],
        name: "calculateTotalMintPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "totalMintPrice",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount_",
                type: "uint256",
            },
        ],
        name: "devMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentPhase",
        outputs: [
            {
                internalType: "enum NotSusProject.Phases",
                name: "phase",
                type: "uint8",
            },
            {
                internalType: "uint32",
                name: "startTime",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "endTime",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user_",
                type: "address",
            },
            {
                internalType: "bytes32[]",
                name: "proof_",
                type: "bytes32[]",
            },
        ],
        name: "getMintEligibilityAtCurrentPhase",
        outputs: [
            {
                internalType: "bool",
                name: "mintEligibility",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
        ],
        name: "getMintable",
        outputs: [
            {
                internalType: "uint256",
                name: "mintable",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRevealedBool",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user_",
                type: "address",
            },
            {
                internalType: "bytes32[]",
                name: "proof_",
                type: "bytes32[]",
            },
        ],
        name: "getRole",
        outputs: [
            {
                internalType: "enum NotSusProject.Roles",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user_",
                type: "address",
            },
            {
                internalType: "bytes32[][4]",
                name: "proof_",
                type: "bytes32[][4]",
            },
        ],
        name: "getRoleFromProofs",
        outputs: [
            {
                internalType: "enum NotSusProject.Roles",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getSupplyInfo",
        outputs: [
            {
                internalType: "uint256",
                name: "collectionSize",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "totalSupply_",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "isReveal_",
                type: "bool",
            },
        ],
        name: "isRevealed",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "maxMintPerWallet",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum NotSusProject.Roles",
                name: "",
                type: "uint8",
            },
        ],
        name: "merkleRoot",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount_",
                type: "uint256",
            },
            {
                internalType: "bytes32[]",
                name: "proof_",
                type: "bytes32[]",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "numberMintedPublicSales",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "salePrice",
                type: "uint256",
            },
        ],
        name: "royaltyInfo",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "baseURI_",
                type: "string",
            },
        ],
        name: "setBaseURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "phase_",
                type: "uint256",
            },
        ],
        name: "setCurrentPhase",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint96",
                name: "feeNumerator",
                type: "uint96",
            },
        ],
        name: "setDefaultRoyalty",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum NotSusProject.Roles",
                name: "role_",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "root_",
                type: "bytes32",
            },
        ],
        name: "setMerkleRoot",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "phase_",
                type: "uint256",
            },
            {
                internalType: "uint32",
                name: "startTime_",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "endTime_",
                type: "uint32",
            },
        ],
        name: "setPhaseConfig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "preRevealURI_",
                type: "string",
            },
        ],
        name: "setpreRevealURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "standardMintPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "collectionSize_",
                type: "uint256",
            },
        ],
        name: "updateCollectionSize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "to_",
                type: "address",
            },
        ],
        name: "withdrawAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
