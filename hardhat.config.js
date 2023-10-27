require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.19',
  // defaultNetwork: 'sepolia',
  etherscan: {
    apiKey: '7A81UN3AKCJG4NBXCZTU4H5IEPS112BTBX',
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/ffWUEieLkMloUHY-uMROHB_jJ0bu83-T`,
      accounts: [
        'dedd1c0c830c860e1299abe9588d70d26977819deb618826087643ca06480e63',
      ],
    },
  },
};
