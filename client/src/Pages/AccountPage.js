import React, {useContext} from 'react'
import "../utils/AccountPage.css"
import AccountInfo from '../components/AccountComponents/AccountInfo'
import AccountArticles from '../components/AccountComponents/AccountContents'
import AccountNft from '../components/AccountComponents/AccountNft'
import AccountSend from '../components/AccountComponents/AccountSend'
import { Box } from '@mui/system'
import { AppContext } from '../AppContext'
import axios from 'axios'


const AccountPage = () => {
  
  const context = useContext(AppContext);
  const {imgSrc, jwt, userId} = context.state;
  const {setImgSrc} = context.action;
  

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    
    return new Promise((resolve) => {
        reader.onload = () => {
            setImgSrc(reader.result);
            resolve();
            };
        });
  };
  const handleImageChange = (e) => {
    if (e.target.files) {
      encodeFileToBase64(e.target.files[0])
    } else {
      return;
    }
  }

  const handleImgToChange = () => {
    axios.post('http://localhost:3001/users/uploadProfile', {
      userId: userId,
      profile_image: imgSrc,
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })
  }

  return (
    // account Profile Img ul
    //
    <div className='account-contianer'>
      <div className='account-wrapper'>
        <div className='account-profile'>
          <Box component="img" sx={{width: "300px", height: "250px"}} src={imgSrc} />
            {imgSrc ? null : <input type="file" name="image"  onChange={handleImageChange}/>}
            <button type='button' onClick={handleImgToChange}>변경하기</button>
        </div>
        <AccountInfo />
      </div>
      <AccountSend />
      <div className='account-contents-container'>
        <AccountArticles />
        <AccountNft />
      </div>
    </div>

  )
}

export default AccountPage
