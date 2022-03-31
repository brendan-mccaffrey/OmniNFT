// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const abi = require('ethereumjs-abi');
const web3 = require("web3");

async function main() {
  // thsi script is for random tasks like converting constructor args to bytecode for verification on ftmscan

  // We get the contract to deploy
  const params = [
    // "https://boredapeyachtclub.com/api/mutants/",
    "0x034697223c82C3ABEC358D0ccD68f5713Fc21011"
  ]

  const enc = abi.rawEncode(['address'], params)
  
  console.log(enc)
  console.log("-")
  console.log(`Encoded: ${enc.toString('hex')}`);


  // const enc = web3.utils.padLeft(web3.utils.hexToBytes(yourAddressString, 32);


  // const enc = web3.utils.padLeft(web3.utils.hexToBytes("0x034697223c82C3ABEC358D0ccD68f5713Fc21011", 32))

  // console.log(enc)
  // console.log("-")
  // console.log(`Encoded: ${enc.toString('hex')}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
