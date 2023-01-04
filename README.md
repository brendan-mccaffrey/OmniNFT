# OmniNFT

This is an omnichain nft project scaffold example using Layer Zero.

### A few notes:

- first of all, I know this is gross. I did this a while ago (and one of my first major NFT deployments), and I wrote this entire thing (including contracts, test deployments, test mints/traverses, mainnet deployments) in under 48 hours. 
Examples of what I could do (and will do before this is public)
1) automate all setRemote calls within a chain in a for loop. Note to future self, this requires a sleep bc u will get rate limited on hardhat.

- the contract files are named "OmniNFT(chain)". However, prior to deployment, the name of the actual contract should be changed to the the chain-agnostic version "OmniNFT", so that the contracts are more "chain agnostic". 
Temporary renaming is required 
1) so that hardhat recognizes the correct one each time.
2) you cant use the same contract bc of mint IDs

- the only differencce between each contract is the start ID (nextTokenID) and max mint tokens. This is so that minting on different chains do not conflict with one another, etc.

- mutants were used as sample metadata URI.


## DEPLOYMENT

CHANGE ENV PRIVATE KEY TO REFLECT REAL DEPLOYMENT ADDRESS

#### Do the following for each chain:
example below is ethereum

change contract names
delete artifacts and cache
change etherscan

`npx hardhat run scripts/eth/deploy.js --network eth_main`
log address in addremote

PASTE ADDRESS HERE
`npx hardhat verify --contract "contracts/omninft-eth.sol:OmniNFT" --network eth_main "CONTRACT_ADDRESS"  "LZ_ENDPOINT_ADDR" "METADATA_URI"`

change eth contract name, change bsc contract name
delete artifacts and cache
change etherscan

...repeat for each chain

Now log deployed addresses into `addRemote` files

change contract names
delete artifacts and cache

MAKE SURE all addremotes have correct deployment addresses

`npx hardhat run scripts/eth/addremote.js --network eth_main`

change contract names
delete artifacts and cache

...repeat for each chain

