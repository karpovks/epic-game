const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Gumbo", "Tamale", "GutterPunk"],       // Names
    ["https://c.tenor.com/yFVhGCgBNQ0AAAAC/gumby-im-gumby.gif", // Images
    "https://c.tenor.com/2roX3uxz_68AAAAC/cat-space.gif", 
    "https://c.tenor.com/qZ9HrMxmzwUAAAAM/macho-man.gif"],
    [250, 200, 500],                    // HP values
    [100, 50, 25],
    "Tainted Unicorn", // Boss name
    "https://i.imgur.com/sv2koDi.jpeg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();