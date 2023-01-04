const { ethers } = require("hardhat");
const hre = require("hardhat");
const https = require('https');
const axios = require('axios');
// const contractABI = require("../../abis/OEOValentines.json");
// const contractAddr = "0x04eeBE0b6f080f6001A79bBb18A9DE46803594E0";
// const ownerAddr = "0xC20E215a48f81aBb457f300575C3c7604C9338d2";


// This file validates metadata on Opensea - in case art is not showing up
async function main() {

    // signer = await hre.ethers.getSigner()
    // console.log(signer[0].address)
    let contractAddr = "redacted"

    for (let i = 1; i < 7711; i++) {
        const url = "https://api.opensea.io/asset/" + contractAddr + "/" + i.toString() + "/validate/";
        console.log("Calling on " + i.toString())

        await axios.get(url)
            .then(response => {
                console.log(response.data.url);
                console.log(response.data.explanation);
            })
            .catch(error => {
                console.log(error);
            });

        // wait for .1 seconds
        await new Promise(r => setTimeout(r, 1000));
    }

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });