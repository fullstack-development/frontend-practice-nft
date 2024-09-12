require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ARBITRUM_SEPOLIA_RPC_URL = process.env.ARBITRUM_SEPOLIA_RPC_URL;
const ARBISCAN_API_KEY = process.env.ARBISCAN_API_KEY;

if (!WALLET_PRIVATE_KEY) console.error(new Error('"Private key is not defined"'));
if (!ARBITRUM_SEPOLIA_RPC_URL) throw console.error(new Error('Invalid provider url'));
if (!ARBISCAN_API_KEY) throw console.error(new Error('Invalid api key'));

module.exports = {
    networks: {
        arbitrumSepolia: {
            url: `${ARBITRUM_SEPOLIA_RPC_URL}`,
            chainId: 421614,
            accounts: [WALLET_PRIVATE_KEY],
        }
    },
    solidity: {
        compilers: [
            {
                version: '0.8.13',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 50000,
                    },
                },
            }
        ],
    },
    etherscan: {
        apiKey: {
            arbitrumSepolia: ARBISCAN_API_KEY,
        },
        customChains: [
            {
                network: 'arbitrumSepolia',
                chainId: 421614,
                urls: {
                    apiURL: 'https://api-sepolia.arbiscan.io/api',
                    browserURL: 'https://sepolia.arbiscan.io/',
                },
            },
        ],
    },
};
