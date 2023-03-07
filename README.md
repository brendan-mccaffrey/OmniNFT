# OmniNFT

This is an omnichain nft project scaffold example using Layer Zero.

### A few notes:

- Firstly, forgive me for sloppy code. This was done a while ago, I only made a few changes to slightly improve readability and remove sensitive information. A much better layout can be implemented, I encourage others to do so! Some ideas for improvement:
    - automate setRemote calls (within a chain) in a for loop (may require a sleep bc of rate limiting)
    - implement this in Foundry (much better than hardhat imo)

- the contract files are named "OmniNFT(chain)". However, prior to deployment, the name of the actual contract should be changed to the the chain-agnostic version (e.g. "mynft"), so that the contracts are more "chain agnostic". Temporarily renaming the contracts (or editing the same contract between deployments) is required because:
    - hardhat will have issues recognizing the correct one each time (`getContractFactory()`).
    - you cant use the same contract bc of mint IDs (i.e. don't want to mint ID 1 on eth and ID 1 on bsc, etc.)

- the only differencce between each contract is the start ID (nextTokenID) and max mint tokens. This is so that minting on different chains do not conflict with one another, etc.


## DEPLOYMENT

Configure .env

#### Do the following for each chain:

- change contract names
- delete artifacts and cache
- change etherscan (arbiscan, avascan, etc.) in hardhat config

// deploy contract

1) `npx hardhat run scripts/eth/deploy.js --network eth_main`

- log address in addremote

// verify on etherscan

2) `npx hardhat verify --contract "contracts/omninft-eth.sol:OmniNFT" --network eth_main "CONTRACT_ADDRESS"  "LZ_ENDPOINT_ADDR" "METADATA_URI"`

- change contract names
- delete artifacts and cache
- change etherscan api key in hardhat config for verification on next chain

...repeat for each chain

- Now log deployed addresses into `addRemote` files

- change contract names
- delete artifacts and cache

- MAKE SURE all addremotes have correct deployment addresses

// add remote contracts for omnichain communication

3) `npx hardhat run scripts/eth/addremote.js --network eth_main`

- change contract names
- delete artifacts and cache

...repeat for each chain

