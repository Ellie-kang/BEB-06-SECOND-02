const dotenv = require('dotenv');
dotenv.config();
const { web3, rpcUrl } = require('./web3provider');
const contractAddress = process.env.MINT_CONTRACT;
const Contract = require('web3-eth-contract');
Contract.setProvider(rpcUrl);
const abi = require('./mintAbi.json');
const privateKey = process.env.PRIVATEKEY;
const contract = new Contract(abi, contractAddress);

// address to, tokenURL
const mintingNft = async (address, tokenURL) => {
  const signer = web3.eth.accounts.privateKeyToAccount(privateKey);

  const gasPrice = await web3.eth.getGasPrice(function (error, result) {
    if (error) throw error;
    return result;
  });
  const accountNonce = '0x' + (await web3.eth.getTransactionCount(signer.address)).toString(16);

  const tx = {
    from: signer.address,
    to: contractAddress,
    gas: web3.utils.toHex(gasPrice),
    gasLimit: 3000000,
    nonce: accountNonce,
    chainId: 5,
    value: '0x0',
    data: contract.methods.safeMint(address, tokenURL).encodeABI()
  };
  const signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey);

  try {
    const receipt = await web3.eth
      .sendSignedTransaction(signedTx.rawTransaction)
      .once('transactionHash', (txhash) => {
        console.log('Mining transaction ...');
        console.log(`https://goerli.etherscan.io/tx/${txhash}`);
      });
      // The transaction is now on chain!
    console.log(`Mined in block ${receipt.blockNumber}`);
    return true;
  } catch {
    return false;
  }
};

module.exports = {
  mintingNft
};
