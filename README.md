![](readme_images/readme_banner.png)



Smart contracts in Ethereum are immutable by default. Once you create them there is no way to alter them, effectively acting as an unbreakable contract among participants.

However, for some scenarios, it is desirable to be able to modify them. Think of a traditional contract between two parties: if they both agreed to change it, they would be able to do so. On Ethereum, they may desire to alter a smart contract to fix a bug they found (which might even lead to a hacker stealing their funds!), to add additional features, or simply to change the rules enforced by it.

![](https://miro.medium.com/max/1138/1*LFsY3A1StQDFOCOHrAZsgQ.png)

The basic idea is using a proxy for upgrades. The first contract is a simple wrapper or "proxy" which users interact with directly and is in charge of forwarding transactions to and from the second contract, which contains the logic. The key concept to understand is that the logic contract can be replaced while the proxy, or the access point is never changed. Both contracts are still immutable in the sense that their code cannot be changed, but the logic contract can simply be swapped by another contract. The wrapper can thus point to a different logic implementation and in doing so, the software is "upgraded".

# How to use
We are going to work with rinekby testnet network

### Setup
- install `npm` and `npx` on your machine
- run `npm install` to set up all the dependencies (hardhat, ethers, etc.)
- set up a [Metamask](https://metamask.io/download.html) wallet
- get free eth on rinkeby testnet  [fake testnet ether](https://www.rinkebyfaucet.com//)
- set up an Alchemy account [here](https://alchemy.com/?a=641a319005)
- create`.env` file and then fill in the following environment variables with your own info
```shell
  ETHERSCAN_API_KEY=
  API_URL=
  PRIVATE_KEY=
```


### Run:
- run `npx hardhat run scripts/deploy.js --network rinkeby` to deploy the contract to the Rinkeby testnet
- run `npx hardhat test` to run unit tests
- run `npx hardhat verify --network rinkeby <DEPLOYED_CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMS> ` to verify your contract on Etherscan

