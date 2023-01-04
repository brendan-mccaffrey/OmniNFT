const hre = require("hardhat");

async function main() {
    console.log("Funding contract");

    let con = await hre.ethers.getContractFactory("L0")

    // rinkAddr = ""
    // mumbaiAddr = ""

    const contract = await con.attach(
        rinkAddr
    );

    let txData = {
        value: ethers.utils.parseEther("0.1"),
        gasLimit: 5000000
    }

    resp = await contract.fund(txData);

    let result = await resp.wait();

    console.log(result);

    // resp = await contract.ownerOf(1);

    // console.log("Expect none", resp);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });