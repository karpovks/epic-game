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
    150 // Boss attack damage                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done!");
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