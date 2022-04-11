import { ethers } from "hardhat";

async function main() {
  const Proxy = await ethers.getContractFactory("Proxy");
  const proxy = await Proxy.deploy();

  await proxy.deployed();
  console.log("Proxy contract deployed to:", proxy.address);

  const Logic = await ethers.getContractFactory("Logic");
  const logic = await Logic.deploy();

  await logic.deployed();
  console.log("Logic contract deployed to:", logic.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
