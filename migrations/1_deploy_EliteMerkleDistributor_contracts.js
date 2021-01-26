const EliteMerkleDistributor = artifacts.require("EliteMerkleDistributor");

// addresses[0]: 0x38589069B6F7c7FA8Fd2B7e5c6d14C11893E358d (Eliteswap: Deployer)

module.exports = async function (deployer, network, addresses) {
  let tokenAddress;
  let merkleRoot;
  
  if (network === 'mainnet' || network === 'mainnet-fork') {
    tokenAddress = await '0x380291A9A8593B39f123cF39cc1cc47463330b1F'; // eltAddress
    merkleRoot = await '0x62c6c83f2297e12e35f67fc477c907cde156cce0256974a2bf7de87d126a3c24';
  } else if (network === 'ropsten' || network === 'ropsten-fork') {
    tokenAddress = await '0x380291A9A8593B39f123cF39cc1cc47463330b1F'; // eltAddress
    merkleRoot = await '0x62c6c83f2297e12e35f67fc477c907cde156cce0256974a2bf7de87d126a3c24';
  } else {
    throw new Error('No Elite Swap on this network')
  }
  
  await deployer.deploy(EliteMerkleDistributor, tokenAddress, merkleRoot);
};
