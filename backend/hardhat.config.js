require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/qe7sfj2YYNQZE7n3VcKnB7AqdlWTV-Ul",
      accounts: [
        "5ad2d795dfa376f88acf7d7240ac3420355561ec3f6571b1a9a29ae33802d879",
      ],
    },
  },
};
