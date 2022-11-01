const Web3 = require('web3');
const Contract = require('web3-eth-contract');
const dotenv = require('dotenv');
dotenv.config();
const rpcUrl = `https://goerli.infura.io/v3/${process.env.WEB3KEY}`
const abi = require('./abi.json');
/* function getWeb3() {
  const web3 = new Web3(new Web3.providers.HttpProvider(`https://goerli.infura.io/v3/${process.env.WEB3KEY}`));
  return web3;
} */

async function transferFrom () {
  const web3 = new Web3(rpcUrl);

  const contractAddress = process.env.CONTRACT;
  Contract.setProvider(rpcUrl);
  const contract = new Contract(abi, contractAddress);

  const signer = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATEKEY);
  web3.eth.accounts.wallet.add(signer);


  var gasPrice = await web3.eth.getGasPrice(function(error, result) {
    return result;
  });

  const accountNonce = '0x' + (await web3.eth.getTransactionCount(signer.address)).toString(16);
  const amount = web3.utils.toWei('1','ether'); // 보낼 TAKO 여기서 설정.

  // Creating the transaction object
  const tx = {
    from: signer.address,
    to: contractAddress,
    gas: web3.utils.toHex(gasPrice),
    gasLimit: 3000000,
    nonce: accountNonce,
    chainId: 5,
    value: '0x0',
    data: contract.methods.transferFrom('0xA74B39FF88B4dA35B2Ce7769342f3171d40BE46f','0xCD22DF849FDbDB7dF6AA2B2D83394635F0e999ae',amount).encodeABI()
  };

  signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey)
  console.log("Raw transaction data: " + signedTx.rawTransaction)

  // Sending the transaction to the network
  const receipt = await web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .once("transactionHash", (txhash) => {
        console.log(`Mining transaction ...`);
        console.log(`https://goerli.etherscan.io/tx/${txhash}`);
    });
  // The transaction is now on chain!
  console.log(`Mined in block ${receipt.blockNumber}`);
}

async function main () {
  const web3 = new Web3(rpcUrl);

  const contractAddress = process.env.CONTRACT;
  Contract.setProvider(rpcUrl);
  const contract = new Contract(abi, contractAddress);

  const signer = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATEKEY);
  web3.eth.accounts.wallet.add(signer);


  var gasPrice = await web3.eth.getGasPrice(function(error, result) {  
    return result;
  });

  const accountNonce = '0x' + (await web3.eth.getTransactionCount(signer.address)).toString(16);
  const amount = web3.utils.toWei('1','ether'); // 보낼 TAKO 여기서 설정.

  // Creating the transaction object
  const tx = {
    from: signer.address,
    to: contractAddress,
    gas: web3.utils.toHex(gasPrice),
    gasLimit: 3000000,
    nonce: accountNonce,
    chainId: 5,
    value: '0x0',
    data: contract.methods.transfer('0xA74B39FF88B4dA35B2Ce7769342f3171d40BE46f', amount).encodeABI()
  };

  signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey)
  console.log("Raw transaction data: " + signedTx.rawTransaction)

  // Sending the transaction to the network
  const receipt = await web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .once("transactionHash", (txhash) => {
        console.log(`Mining transaction ...`);
        console.log(`https://goerli.etherscan.io/tx/${txhash}`);
    });
  // The transaction is now on chain!
  console.log(`Mined in block ${receipt.blockNumber}`);
}





async function createAccount() {
  try {
    const account = await getWeb3().eth.personal.newAccount("!@#1#asdasd");
    console.log(account)
  } catch(e) {
    console.log(e)
    return e
  }
}
async function getAccounts() {
  try {
    const accounts = await getWeb3().eth.personal.getAccounts();
    console.log(accounts)
  } catch(e) {
    console.log(e)
    return e;
  }
}

async function reward() {

}
async function transfer() {

}


module.exports = {
  /* getWeb3, */
  reward,
  transfer,
  // main,
  // transferFrom
}

