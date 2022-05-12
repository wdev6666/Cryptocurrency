const { ethers } = require("hardhat");

const main = async () => {
  const NDSContract = await ethers.getContractFactory("NDS");
  const deployedNDSContract = await NDSContract.deploy("NDS", "ND");
  console.log("NDS Contract Address:", deployedNDSContract.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
