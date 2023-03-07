const hre = require("hardhat");

async function main() {
    console.log("Sending to fuji");

    let con = await hre.ethers.getContractFactory("TODO");

    // TODO Change these IDs to match LZ IDs and addresses to match your deployments
    ethId = 10001
    bscId = 10002
    avaxId = 10006
    polyId = 10009
    arbId = 10010
    optId = 10011
    ftmId = 10012
    ethTestAddr = ""
    polyTestAddr = ""
    arbTestAddr = ""
    optTestAddr = ""
    bscTestAddr = ""
    ftmTestAddr = ""
    avaxTestAddr = ""

    let txData = {
        value: ethers.utils.parseEther(".8"),
        gasLimit: 500000
    }

    // TODO replace redacted with addresses
    const contract = await con.attach(
        "redacted"
    );

    resp = await contract.balanceOf("redacted");
    console.log("Expect 2:", resp);

    console.log("Traversing");
    resp = await contract.traverse(ethId, 1, txData);

    let result = await resp.wait();
    console.log("Traversal resp", result);

    resp = await contract.balanceOf("redacted");
    console.log("Expect 1:", resp);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });