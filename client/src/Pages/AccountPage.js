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
import { Chip, Grid } from '@mui/material';
import alert from 'alert';

const AccountPage = () => {
  const context = useContext(AppContext);
  const { userProfileImg, userId, userArticles } = context.state;
  const { setUserProfileImg, setUserArticles } = context.action;

  useEffect(() => {
    axios.get('http://localhost:3001/articles')
      .then((res) => {
        const response = res.data;
        const myArticles = [...response].filter((item) => {
          return userId === item.author.userId;
        });
        setUserArticles(myArticles);
      });
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
    }
  };

  const handleImgToChange = () => {
    axios.patch('http://localhost:3001/users/uploadProfile', {
      userId: userId,
      profileImage: userProfileImg
    }, {
      withCredentials: true
    }).then((res) => {
      if (res) alert('프로필이 변경되었습니다.');
      window.location.replace('/account');
    });
  };
  // account Page 에 들어오면, DB에 user 요청.

  const profileStyle = {
    width: '100%',
    maxWidth: '250px',
    height: '250px'
  };

  return (
    <Grid
      p={4}
      pt={12}
      pb={12}
      container sx={{
        flexDirection: 'column',
        alignContent: 'stretch',
        alignItems: 'stretch'
      }}
    >
      <Grid item xs={12}>
        <Grid
          container
          mb={8}
          spacing={6}
          sx={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'stretch',
            alignItems: 'flex-end'
          }}
        >
          <Grid item xs={12} sm={4}>
            <Grid
              container sx={{
                justifyContent: 'center'
              }}
            >
              {/* 프로필 이미지 */}
              {
                userProfileImg
                  ? <Box component='img' sx={profileStyle} src={userProfileImg} alt='' />
                  : <Avatar sx={profileStyle} alt='Remy Sharp' />
              }

              <Grid
                container
                mt={4}
              >
                <Grid item xs={12}>
                  {/* 사진 이미지 업로드 버튼 */}
                  <input id='contained-button-file' style={{ display: 'none' }} type='file' accept='image/*' name='image' onChange={handleImageChange} />
                  <label htmlFor='contained-button-file'>
                    <Button
                      component='div'
                      sx={{
                        width: 1,
                        '&.MuiButtonBase-root:hover': {
                          bgcolor: 'transparent'
                        }
                      }}
                    >
                      <Chip
                        label='사진 변경 하기'
                        sx={{
                          width: 1,
                          fontWeight: 600,
                          color: 'white',
                          fontSize: '16px',
                          fontFamily: 'Poppins',
                          bgcolor: 'rgba(231,127,112)'
                        }}
                      />
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={12}>
                  {/* 프로필 이미지 변경 버튼 */}
                  <Button
                    type='button'
                    onClick={handleImgToChange}
                    sx={{
                      width: 1,
                      '&.MuiButtonBase-root:hover': {
                        bgcolor: 'transparent'
                      }
                    }}
                  >
                    <Chip
                      label='프로필 변경하기'
                      sx={{
                        width: 1,
                        fontWeight: 600,
                        color: 'white',
                        fontSize: '16px',
                        fontFamily: 'Poppins',
                        bgcolor: 'rgba(231,127,112)'
                      }}
                    />
                  </Button>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid
              container spacing={3} sx={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'flex-start',
                alignItems: 'stretch'
              }}
            >
              <Grid item xs={12}>
                <AccountInfo />
              </Grid>
              <Grid item xs={12}>
                <AccountSend />
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container spacing={6} sx={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'stretch',
            alignItems: 'flex-start'
          }}
        >
          <Grid item xs={12} sm={4}>
            <AccountArticles userArticles={userArticles} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AccountNft />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AccountPage;
