const Web3 = require('web3');
const dotenv = require('dotenv');
dotenv.config();
const rpcUrl = `https://goerli.infura.io/v3/${process.env.WEB3KEY}`;
const web3 = new Web3(rpcUrl);

module.exports = {
  web3,
  rpcUrl
};
