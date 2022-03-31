const hre = require("hardhat");


async function main() {
    // TODO
    let con = await hre.ethers.getContractFactory("L0")

    ethId = 10001
    bscId = 10002
    avaxId = 10006
    polyId = 10009
    arbId = 10010
    optId = 10011
    ftmId = 10012
    // the contracts were deployed to the same address in the test run
    testaddr = "0x034697223c82C3ABEC358D0ccD68f5713Fc21011";
    // ethTestAddr = "0x034697223c82C3ABEC358D0ccD68f5713Fc21011"
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