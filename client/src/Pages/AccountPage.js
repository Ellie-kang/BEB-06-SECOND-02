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
import { Chip, Grid, Stack } from '@mui/material';


const AccountPage = () => {
  const context = useContext(AppContext);
  const { userProfileImg, jwt, userId, userArticles } = context.state;
  const { setUserProfileImg, setUserArticles } = context.action;

  useEffect(() => {
    axios.get("http://localhost:3001/articles")
    .then((res) => {
      const response = res.data;
      const myArticles = [...response].filter((item) => {
        return userId === item.author.userId;
      })
      setUserArticles(myArticles);
    })
  }, [userId]);

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
      return;
    }
  };

  const handleImgToChange = () => {
    axios.patch('http://localhost:3001/users/uploadProfile', {
      userId: userId,
      profileImage: userProfileImg
    }, {
      withCredentials: true
    }).then((res) => {
      if (res) alert("프로필이 변경되었습니다.");
      window.location.replace('/account');
    });
  };
  // account Page 에 들어오면, DB에 user 요청.

  return (
    // account Profile Img ul
    //
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}></Grid>
      
      <Grid item xs={3}></Grid>
      <Grid item xs={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} mt={14}>
          {userProfileImg ? <Box component='img' sx={{ width: '100%', height: '250px' }} src={userProfileImg} alt='' /> : <Avatar sx={{ width: '100%', height: '250px' }} alt='Remy Sharp' />}
          </Grid>
          <Grid item xs={6} ml={0}>
          <input id='contained-button-file' style={{ display: 'none' }} type='file' accept='image/*' name='image' onChange={handleImageChange} />
            <label htmlFor='contained-button-file'>
              <Button
                  component='div'
                  sx={{
                    '&.MuiButtonBase-root:hover': {
                        bgcolor: 'transparent'
                      },
                  }}
                  >
                    <Chip label="사진 변경 하기" 
                      sx={{
                        maxWidth:"160px",
                        fontWeight:600,
                        color: "white",
                        fontSize: "16px",
                        fontFamily:"Poppins",
                        bgcolor:'rgba(231,127,112)'}}/>
              </Button>
            </label>
          </Grid>
          <Grid item xs={5} ml={-1.5}>
             <Button
                type='button'
                onClick={handleImgToChange}
                sx={{
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent'
                  },
                  }}
                ><Chip label="프로필 변경하기" 
                  sx={{
                    maxWidth:"150px",
                    fontWeight:600,
                    color: "white",
                    fontSize: "16px",
                    fontFamily:"Poppins",
                    bgcolor:'rgba(231,127,112)'
                  }}/>
             </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
        <AccountInfo />
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
        <AccountSend/>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={4} mt={10}>
        <AccountArticles userArticles={userArticles} />
      </Grid>
      <Grid item xs={4} mt={10}>
        <AccountNft/>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>

  );
};

export default AccountPage;
