import React, { useContext, useEffect } from 'react';
import '../utils/AccountPage.css';
import AccountInfo from '../components/AccountComponents/AccountInfo';
import AccountArticles from '../components/AccountComponents/AccountContents';
import AccountNft from '../components/AccountComponents/AccountNft';
import AccountSend from '../components/AccountComponents/AccountSend';
import { Box } from '@mui/system';
import { AppContext } from '../AppContext';
import axios from 'axios';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const AccountPage = () => {
  const context = useContext(AppContext);
  const { userProfileImg, jwt, userId, userArticles } = context.state;
  const { setUserArticles, setUserProfileImg } = context.action;

  useEffect(() => {
    // useEffect 써서 userArticles 바꿔주기.
  });

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setUserProfileImg(reader.result);
        resolve();
      };
    });
  };
  const handleImageChange = (e) => {
    if (e.target.files) {
      encodeFileToBase64(e.target.files[0]);
    } else {
      alert('유효한 이미지 파일을 업로드해주세요.');
    }
  };

  const handleImgToChange = () => {
    axios.patch('http://localhost:3001/users/uploadProfile', {
      userId: userId,
      profileImage: userProfileImg
    }, {
      withCredentials: true
    }).then((res) => console.log(res));
  };
  // account Page 에 들어오면, DB에 user 요청.

  return (
    // account Profile Img ul
    //
    <div className='account-contianer'>
      <div className='account-wrapper'>
        <div className='account-profile'>
          {userProfileImg ? <Box component='img' sx={{ width: '300px', height: '250px' }} src={userProfileImg} alt='' /> : <Avatar sx={{ width: '200px', height: '200px' }} alt='Remy Sharp' />}
          <input id='contained-button-file' style={{ display: 'none' }} type='file' accept='image/*' name='image' onChange={handleImageChange} />
          <label htmlFor='contained-button-file'>
            <Button
              sx={{
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent'
                },
                color: 'rgba(47, 83, 239)',
                background: 'none',
                boxShadow: 'none'
              }} component='span'
            >프로필 바꾸기
            </Button>
          </label>
          <Button type='button' onClick={handleImgToChange} sx={{ color: 'rgba(47, 83, 239)' }}>프로필 변경</Button>
        </div>
        <AccountInfo />
      </div>
      <AccountSend />
      <div className='account-contents-container'>
        {/* <AccountArticles /> */}
        <AccountNft />
      </div>
    </div>

  );
};

export default AccountPage;
