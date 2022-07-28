const hre = require("hardhat");

const main = async () => {
  const Warranty = await hre.ethers.getContractFactory("Warranty");
  const warranty = await Warranty.deploy();
  await warranty.deployed();
  console.log("Warranty deployed to:", warranty.address);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
