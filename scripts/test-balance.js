const hre = require("hardhat");

async function main() {
    console.log("Checking balance");

    let con = await hre.ethers.getContractFactory("L0")

    rinkAddr = "redacted"
    mumbaiAddr = "redacted"

    const contract = await con.attach(
        mumbaiAddr
    );

    resp = await contract.balanceOf("");

    console.log("Expect 1:", resp)

    resp = await contract.ownerOf(1);

    console.log("Expect our addr", resp);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });