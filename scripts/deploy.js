const hre = require("hardhat");

async function main() {


    // This is depreciated, there are now deploy functions in the subfolders

    // cname = "L0";

    // const Contract = await hre.ethers.getContractFactory(cname);

    // rinkebyEnd = "0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA";
    // mumbaiEnd = "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8";
    // bscEnd = "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1";

    // // TODO | Constructor arg
    // const contract = await Contract.deploy("https://ipfs.io/ipfs/QmWEFSMku6yGLQ9TQr66HjSd9kay8ZDYKbBEfjNi4pLtrr/", bscEnd); 

    // await contract.deployed();

    // console.log(cname, " deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});