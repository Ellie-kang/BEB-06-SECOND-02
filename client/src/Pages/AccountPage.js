import React, {useState} from 'react'
import "../utils/AccountPage.css"
import AccountInfo from '../components/AccountComponents/AccountInfo'
import AccountContents from '../components/AccountComponents/AccountContents'
import AccountNft from '../components/AccountComponents/AccountNft'



const AccountPage = () => {
  //const [img, setImg] = useState('');
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')

/*   const handleChange = (e) => {
    setImg(e.target.value)
  } */

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }
  const handleAmounthange = (e) => {
    setAmount(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({address, amount})
  }

  return (
    // account Profile Img ul
    //
    <div className='account-contianer'>
      <div className='account-wrapper'>
        <div className='account-profile'>
          <img src='https://user-images.githubusercontent.com/97439643/198324425-a8bf7911-4631-4617-a8c3-fa6f31369a80.png' alt="tako"/>
        </div>
        <AccountInfo />
      </div>
      <div className='account-sender-container'>
        <div className='account-sender-wrapper'>
          <form className='account-sender-form' onSubmit={handleSubmit}>
            <div className='account-sender'>
              <div className='account-sender-label'>Address</div>
              <div className='account-sender-input'>
                <input className='sender-address' placeholder='put address' value={address} onChange={handleAddressChange} /> {/* context.state.name */}
              </div>
            </div>
            <div className='account-sender'>
              <div className='account-sender-label'>Amount</div>
              <div className='account-sender-input'>
                <input className='sender-address' placeholder='put amount' value={amount} onChange={handleAmounthange} /> {/* context.state.name */}
                <button className='account-sender-label' type='submit'>send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='account-contents-container'>
        <AccountContents />
        <AccountNft />
      </div>
    </div>

  )
}

export default AccountPage
