const hre = require("hardhat");

async function main() {

    uri = "https://boredapeyachtclub.com/api/mutants/"
    cname = "L0";

    const Contract = await hre.ethers.getContractFactory(cname);

    testEnd = "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8";
    mainEnd = "0x3c2269811836af69497E5F486A85D7316753cf62";

    // TODO | Constructor arg
    const contract = await Contract.deploy(uri, testEnd);

    await contract.deployed();

    console.log(cname, " deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});