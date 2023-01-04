require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        // -----------------
        //     TESTNETS 
        // ----------------- 
        bsc_test: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            accounts: [process.env.ACCT],
            network_id: '97',
        },
        arb_test: {
            url: "https://rinkeby.arbitrum.io/rpc",
            accounts: [process.env.ACCT],
            network_id: '421611',
        },
        eth_test: {
            url: "https://eth-rinkeby.alchemyapi.io/v2/tYXOFN1_eG2zS4lfQqyN-xpk7aDBiKSz",
            accounts: [process.env.ACCT],
            network_id: '4',
        },
        poly_test: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts: [process.env.ACCT],
            network_id: '80001',
        },
        avax_test: {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            accounts: [process.env.ACCT],
            network_id: '43113'
        },
        ftm_test: {
            url: "https://rpc.testnet.fantom.network",
            accounts: [process.env.ACCT],
            network_id: '4002'
        },
        opt_test: {
            url: "https://kovan.optimism.io/",
            accounts: [process.env.ACCT],
            network_id: '69'
        },
        // -----------------
        //     MAINNETS 
        // ----------------- 
        bsc_main: {
            url: "https://binance.nodereal.io",
            accounts: [process.env.ACCT],
            network_id: '56',
        },
        arb_main: {
            url: "https://rpc.ankr.com/arbitrum",
            accounts: [process.env.ACCT],
            network_id: '42161',
        },
        eth_main: {
            url: "https://rpc.ankr.com/eth",
            accounts: [process.env.ACCT],
            network_id: '1',
        },
        poly_main: {
            url: "https://polygon-rpc.com",
            accounts: [process.env.ACCT],
            network_id: '137',
        },
        avax_main: {
            url: "https://rpc.ankr.com/avalanche",
            accounts: [process.env.ACCT],
            network_id: '43114'
        },
        ftm_main: {
            url: "https://rpc.ftm.tools",
            accounts: [process.env.ACCT],
            network_id: '250'
        },
        opt_main: {
            url: "https://mainnet.optimism.io",
            accounts: [process.env.ACCT],
            network_id: '10'
        }
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    solidity: {
        version: "0.8.11",
        settings: {
            optimizer: {
                enabled: true,
                runs: 999999
            }
        }
    },
    etherscan: {
        // for npx hardhat verify --network <network>

        // -----------------
        // MAINNET EXPLORERS
        // ----------------- 

        // etherscan
        url: 'https://etherscan.io/',
        apiKey: process.env.ETHSCANKEY

        // // binance
        // url: 'https://bscscan.com/',
        // apiKey: process.env.BSCSCANKEY

        // // avalanche
        // url: 'https://snowtrace.io/',
        // apiKey: process.env.AVAXSCANKEY

        // // arbitrum
        // url: 'https://arbiscan.io/',
        // apiKey: process.env.ARBSCANKEY

        // // polygon
        // url: 'https://polygonscan.com/',
        // apiKey: process.env.POLYSCANKEY

        // // fantom
        // url: 'https://ftmscan.com/',
        // apiKey: process.env.FTMSCANKEY

        // // optimism
        // url: 'https://optimistic.etherscan.io/',
        // apiKey: process.env.OPTSCANKEY

        // -----------------
        // TESTNET EXPLORERS
        // -----------------

        // // arbitrum
        // url: 'https://testnet.arbiscan.io/',
        // apiKey: process.env.ARBSCANKEY

        // // avalanche
        // url: 'https://testnet.snowtrace.io/',
        // apiKey: process.env.AVAXSCANKEY

        // // binance
        // url: 'https://testnet.bscscan.com/',
        // apiKey: process.env.BSCSCANKEY

        // // ethereum
        // url: 'https://ropsten.etherscan.io/',
        // apiKey: process.env.ETHSCANKEY

        // // fantom
        // url: 'https://testnet.ftmscan.com/',
        // apiKey: process.env.FTMSCANKEY

        // // optimism
        // url: 'https://kovan-optimistic.etherscan.io/',
        // apiKey: process.env.OPTSCANKEY

        // // polygon
        // url: 'https://mumbai.polygonscan.com/',
        // apiKey: process.env.POLYSCANKEY
    }
};
