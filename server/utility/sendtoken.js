const dotenv = require('dotenv');
dotenv.config();
const {web3, rpcUrl} = require('./web3provider');
const contractAddress = process.env.CONTRACT;
const Contract = require('web3-eth-contract');
Contract.setProvider(rpcUrl);
const abi = require('./abi.json');
const privateKey = process.env.PRIVATEKEY;
const contract = new Contract(abi, contractAddress);

const sendtoken3 = async (address) => {
    const signer = web3.eth.accounts.privateKeyToAccount(privateKey);
    // web3.eth.accounts.wallet.add(signer);
    // console.log(web3.eth.accounts.wallet)
    var gasPrice = await web3.eth.getGasPrice(function(error, result) {  
        return result;
      });
    const accountNonce = '0x' + (await web3.eth.getTransactionCount(signer.address)).toString(16);
    const amount = web3.utils.toWei('3','ether'); // 보낼 TAKO 여기서 설정.

    const tx = {
        from: signer.address,
        to: contractAddress,
        gas: web3.utils.toHex(gasPrice),
        gasLimit: 3000000,
        nonce: accountNonce,
        chainId: 5,
        value: '0x0',
        data: contract.methods.transfer(address, amount).encodeABI()
      };
      signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey)

      try{
        const receipt = await web3.eth
        .sendSignedTransaction(signedTx.rawTransaction)
        .once("transactionHash", (txhash) => {
            console.log(`Mining transaction ...`);
            console.log(`https://goerli.etherscan.io/tx/${txhash}`);
        });
      // The transaction is now on chain!
          console.log(`Mined in block ${receipt.blockNumber}`);
          return true
      } catch{
        return false
      }
}

const sendtoken5 = async (address) => {
    const signer = web3.eth.accounts.privateKeyToAccount(privateKey);
    // web3.eth.accounts.wallet.add(signer);
    // console.log(web3.eth.accounts.wallet)

    var gasPrice = await web3.eth.getGasPrice(function(error, result) {  
        return result;
      });

    const accountNonce = '0x' + (await web3.eth.getTransactionCount(signer.address)).toString(16);
    const amount = web3.utils.toWei('5','ether'); // 보낼 TAKO 여기서 설정.

    const tx = {
        from: signer.address,
        to: contractAddress,
        gas: web3.utils.toHex(gasPrice),
        gasLimit: 3000000,
        nonce: accountNonce,
        chainId: 5,
        value: '0x0',
        data: contract.methods.transfer(address, amount).encodeABI()
      };
      signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey)

      try{
        const receipt = await web3.eth
        .sendSignedTransaction(signedTx.rawTransaction)
        .once("transactionHash", (txhash) => {
            console.log(`Mining transaction ...`);
            console.log(`https://goerli.etherscan.io/tx/${txhash}`);
        });
      // The transaction is now on chain!
          console.log(`Mined in block ${receipt.blockNumber}`);
          return true
      } catch{
        return false
      }
    
}

const user_send = async (sender, recipient, token_amount) => {
    const signer = web3.eth.accounts.privateKeyToAccount(privateKey);
    // web3.eth.accounts.wallet.add(signer);
    // console.log(web3.eth.accounts.wallet)

    var gasPrice = await web3.eth.getGasPrice(function(error, result) {  
        return result;
      });

    const accountNonce = '0x' + (await web3.eth.getTransactionCount(signer.address)).toString(16);
    const amount = web3.utils.toWei(token_amount,'ether'); // 보낼 TAKO 여기서 설정.

    const tx = {
        from: signer.address,
        to: contractAddress,
        gas: web3.utils.toHex(gasPrice),
        gasLimit: 3000000,
        nonce: accountNonce,
        chainId: 5,
        value: '0x0',
        data: contract.methods.transferFrom(sender, recipient, amount).encodeABI()
      };
      signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey)
      try{
        const receipt = await web3.eth
        .sendSignedTransaction(signedTx.rawTransaction)
        .once("transactionHash", (txhash) => {
            console.log(`Mining transaction ...`);
            console.log(`https://goerli.etherscan.io/tx/${txhash}`);
        });
      // The transaction is now on chain!
          console.log(`Mined in block ${receipt.blockNumber}`);
          return true
      } catch{
        return false
      }


}
 
module.exports = {
    sendtoken3,
    sendtoken5,
    user_send
};