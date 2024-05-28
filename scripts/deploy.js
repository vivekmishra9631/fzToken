const hre= require("hardhat");

const tokens = (nTokens)=> {
    return ethers.utils.parseUnits(nTokens.toString(), "ether" );

};

async function main(){
    //DEPLOY TOKEN CONTRACT
    const _initialSupply = tokens(50000000);

    const FriendZone = await hre.ethers.getContractFactory(
        "FriendZone"
    );

    const friendZone = await FriendZone.deploy(_initialSupply);

    await friendZone.deployed();
    console.log(`FriendZone: ${friendZone.address}`);

    //TOKEN SALE CONTRACT
    const _tokenPrice =tokens(1);

    const TokenSale = await hre.ethers.getContractFactory("TokenSale");
    const tokenSale= await TokenSale.deploy(
        friendZone.address,
        _tokenPrice
    );

    await tokenSale.deployed();
    console.log(`TokenSale: ${tokenSale.address}`);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});