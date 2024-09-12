# Frontend practice NFT

## Install dependencies

```bash
$ npm install
```

## Configure .env

Create a `.evn` file in the root of the repository. Use `.evn.example` as an example.

1. First get your Arbitrum Sepolia account private key (for example, you can get it from Metamask).
2. Get Arbitrum Sepolia RPC URL to connect to Arbitrum Sepolia (you can use alchemy, infura or public RPC URLs from https://chainlist.org)
3. Get an API key from etherscan. You need to register at [arbiscan.io](https://arbiscan.io/), go to My Profile -> API Keys and get the key.
4. You will need to get some ETH for deploy. Go to https://faucets.chain.link/ or any other faucet.

```bash
# EOA private key (with ETH in Arbitrum Sepolia, to sign tx)
WALLET_PRIVATE_KEY=""
# Arbitrum Sepolia RPC URL (to connect to Arbitrum Sepolia)
ARBITRUM_SEPOLIA_RPC_URL=""
# Explorer API key (for verification process)
ARBISCAN_API_KEY=""
```

## Deploy smart-contract

Run the command:

```bash
$ npm run deploy
```

You will see something like this:

```bash
➜  frontend-practice-nft npm run deploy

> deploy
> npx hardhat compile && npx hardhat ignition deploy ignition/modules/BimkonEyes.js --network sepolia --verify

Compiled 13 Solidity files successfully (evm target: london).
✔ Confirm deploy to network arbitrumSepolia (421614)? … yes
Hardhat Ignition 🚀

Deploying [ BimkonEyesModule ]

Batch #1
  Executed BimkonEyesModule#BimkonEyes

[ BimkonEyesModule ] successfully deployed 🚀

Deployed Addresses

BimkonEyesModule#BimkonEyes - 0xEe7356FB1362fD659D03892719d424Bd8D9D8f70

Verifying deployed contracts

Verifying contract "contracts/BimkonEyes.sol:BimkonEyes" for network arbitrumSepolia...
Successfully verified contract "contracts/BimkonEyes.sol:BimkonEyes" for network arbitrumSepolia:
  - https://sepolia.arbiscan.io//address/0xEe7356FB1362fD659D03892719d424Bd8D9D8f70#code
```

In this example smart-contract address is 0xEe7356FB1362fD659D03892719d424Bd8D9D8f70 (you will see other address).

You'll find a verified smart-contract code at a link like this - https://sepolia.arbiscan.io//address/0xEe7356FB1362fD659D03892719d424Bd8D9D8f70#code.