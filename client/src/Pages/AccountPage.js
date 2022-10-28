import React, {useState} from 'react'
import "../utils/AccountPage.css"
import AccountInfo from '../components/AccountComponents/AccountInfo'
import AccountContents from '../components/AccountComponents/AccountContents'
import AccountNft from '../components/AccountComponents/AccountNft'



const AccountPage = () => {
  const [img, setImg] = useState('');

  const handleChange = (e) => {
    setImg(e.target.value)
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
      <div className='account-contents-container'>
        <AccountContents />
        <AccountNft />
      </div>
    </div>

  )
}

export default AccountPage
