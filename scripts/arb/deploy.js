const hre = require("hardhat");

async function main() {
    // test uri
    // uri = "https://boredapeyachtclub.com/api/mutants/"

    uri = "ipfs://REDACTED/arb/"
    cname = "REDACTED";

    const Contract = await hre.ethers.getContractFactory(cname);

    // testEnd = "REDACTED";
    // confirmed
    mainEnd = "REDACTED";

    // TODO CHANGE METADATA LINK
    const contract = await Contract.deploy(uri, mainEnd);
    await contract.deployed();

    console.log(cname, " deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });