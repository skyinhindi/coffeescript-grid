const hre = require("hardhat");

const main = async () => {
  const Transact = await hre.ethers.getContractFactory("Transact");
  const transact = await Transact.deploy();
  await transact.deployed();
  console.log("transact deployed to:", transact.address);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
