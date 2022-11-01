const Web3 = require('web3');
const dotenv = require('dotenv');
dotenv.config();
const rpcUrl = process.env.RPCURL;
const web3 = new Web3(rpcUrl);

module.exports = web3;