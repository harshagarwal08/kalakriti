require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "155491473c607c692a24e08648dc894f6e8649054011d77978e548c51ef3ccce";
const RPC_URL = "https://rpc.ankr.com/polygon_mumbai";

module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
      chainId: 80001,
    },
    polygon_mumbai: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
