const hre = require("hardhat");

async function main() {

    uri = "https://boredapeyachtclub.com/api/mutants/"
    cname = "L0";

    const Contract = await hre.ethers.getContractFactory(cname);

    testEnd = "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf";
    mainEnd = "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7";

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