const { web3 } = require('./web3provider');
const newAccount = () => {
  return web3.eth.accounts.create(web3.utils.randomHex(32));
};

module.exports = newAccount;
