const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');
const { ethers } = require('ethers');
require('dotenv').config();

const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ARBITRUM_SEPOLIA_RPC_URL = process.env.ARBITRUM_SEPOLIA_RPC_URL;

if (!WALLET_PRIVATE_KEY) console.error(new Error('"Private key is not defined"'));
if (!ARBITRUM_SEPOLIA_RPC_URL) throw console.error(new Error('Invalid provider url'));

const rpcSepoliaProvider = new ethers.JsonRpcProvider(ARBITRUM_SEPOLIA_RPC_URL);

const wallet = new ethers.Wallet(
    WALLET_PRIVATE_KEY,
    rpcSepoliaProvider,
);

module.exports = buildModule('BimkonEyesModule', (m) => {
    const bimkonEyes = m.contract('BimkonEyes', [
        wallet.address,
        wallet.address,
        wallet.address,
    ]);

    return { bimkonEyes };
});
