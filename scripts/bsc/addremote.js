const hre = require("hardhat");


async function main() {
    let con = await hre.ethers.getContractFactory("REDACTED")

    // chain id
    ethId = 1
    bscId = 2
    avaxId = 6
    polyId = 9
    arbId = 10
    optId = 11
    ftmId = 12

    // deployed contract addresses
    ethAddr = "REDACTED"
    polyAddr = "REDACTED"
    arbAddr = "REDACTED"
    optAddr = "REDACTED"
    bscAddr = "REDACTED"
    ftmAddr = "REDACTED"
    avaxAddr = "REDACTED"

    const contract = await con.attach(
        bscAddr
    );

    // uncomment each of the following sections to set the remote id
    // remote id is for omnichain communications
    //
    // TODO, can for loop this but I needed to 
    // check the result of each when i was using in production


    // let resp = await contract.setTrustedRemote(ethId, ethAddr);
    // // console.log(resp);
    // console.log("Set ETH remote");
    // resp = await contract.setTrustedRemote(arbId, arbAddr);
    // // console.log(resp);
    // console.log("Set ARB remote");
    // resp = await contract.setTrustedRemote(avaxId, avaxAddr);
    // // console.log(resp);
    // console.log("Set AVAX remote");
    // resp = await contract.setTrustedRemote(polyId, polyAddr);
    // // console.log(resp);
    // console.log("Set POLY remote");
    // resp = await contract.setTrustedRemote(optId, optAddr);
    // // console.log(resp);
    // console.log("Set OPT remote");
    resp = await contract.setTrustedRemote(ftmId, ftmAddr);
    // console.log(resp);
    console.log("Set FTM remote");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });