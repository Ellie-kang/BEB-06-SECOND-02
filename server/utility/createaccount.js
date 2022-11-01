const web3 = require('./web3provider')
const new_account = web3.eth.accounts.create(web3.utils.randomHex(32));

module.exports = new_account;