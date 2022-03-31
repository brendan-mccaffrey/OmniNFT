const hre = require("hardhat");

async function main() {

    uri = "https://boredapeyachtclub.com/api/mutants/"
    cname = "L0";

    const Contract = await hre.ethers.getContractFactory(cname);

    testEnd = "0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA";
    mainEnd = "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675";

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