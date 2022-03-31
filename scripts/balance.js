const hre = require("hardhat");

async function main() {
    console.log("Checking balance");

    let con = await hre.ethers.getContractFactory("L0")

    rinkAddr = "0xc4e13A6820945Ec30C86cC684bED747e076742C0"
    mumbaiAddr = "0x1b1504936650A22753A076Cc1A4B75A7A20B820F"

    const contract = await con.attach(
        mumbaiAddr
    );

    resp = await contract.balanceOf("0xF053bf1ef07e8c058a37869Fa9bb62f847c9c9BA");

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