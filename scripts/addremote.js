const hre = require("hardhat");


async function main() {
    // TODO
    let con = await hre.ethers.getContractFactory("L0")

    // Layer Zero Chain IDs - TODO may need changing
    ethId = 10001
    bscId = 10002
    avaxId = 10006
    polyId = 10009
    arbId = 10010
    optId = 10011
    ftmId = 10012
    // the contracts were deployed to the same address in the test run
    testaddr = "REDACTED";
    // ethTestAddr = ""
    // polyTestAddr = ""
    // arbTestAddr = ""
    // optTestAddr = ""
    // bscTestAddr = ""
    // ftmTestAddr = ""
    // avaxTestAddr = ""

    const contract = await con.attach(
        testaddr
    );

    let resp = await contract.setRemote(10002, testaddr);

    console.log(resp);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });