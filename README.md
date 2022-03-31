# Gh0stlyGhosts

This is an omnichain nft project.

### A few notes:

- the contract files are named "L0-chain". However, prior to deployment, the name of the actual contract is changed to the the chain-agnostic version "L0arb -> L0", "Gh0stlyGh0stseth -> Gh0stlyGh0sts". This is just so that hardhat recognizes the correct one each time.

- the only differencce between each contract is the start ID (nextTokenID) and max mint tokens. This is so that minting on different chains do not conflict with one another, etc.

- mutants were used as sample metadata URI.

### Questions

- i have a fixed size gas for the traverse function `uint gasForDestinationLzReceive = 250000;` Id there a chance this brings up an issue down the line?
