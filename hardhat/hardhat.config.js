require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    mumbai:{
      url: "https://rpc-mumbai.maticvigil.com", // mumbai RPC endpoint
      chainId: 80001, // mumbai chain ID
      accounts: ["20137ab5c01fa025a1dc99e31707f779818fdd89645166baec8d271d5de61ab0"],
    }
  }
};
