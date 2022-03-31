const hre = require("hardhat");

async function main() {
    // the name here is of the actualy contract, the file name is irrelevant
    let con = await hre.ethers.getContractFactory("L0")

    let signer = hre.ethers.getSigner("todo - ouraddr")

    // the contracts were deployed to the same address in the test run
    testaddr = "0x034697223c82C3ABEC358D0ccD68f5713Fc21011";
    // ethTestAddr = ""
    // polyTestAddr = ""
    // arbTestAddr = ""
    // optTestAddr = ""
    // bscTestAddr = ""
    // ftmTestAddr = ""
    // avaxTestAddr = ""

    const contract = await con.attach(
        
    );

    let resp = await contract.mint(1 or 2);

    let res = await resp.wait();
    console.log(res);

    console.log("minted");

    resp = await contract.balanceOf("todo - ouraddr");

    console.log("Expect 1 or 2:", resp)

    
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});