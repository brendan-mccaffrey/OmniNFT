const hre = require("hardhat");

async function main() {
    console.log("Sending to fuji");

    let con = await hre.ethers.getContractFactory("L0");

    // let addr1 = hre.ethers.getSigner("0xF053bf1ef07e8c058a37869Fa9bb62f847c9c9BA")

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

    const contract = await con.attach(
        "redacted"
    );

    resp = await contract.balanceOf("redacted");

    console.log("Expect 2:", resp);

    console.log("Traversing");

    // resp = await contract.connect(addr1).traverse(10009, 1);
    resp = await contract.traverse(10006, 1, txData);

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