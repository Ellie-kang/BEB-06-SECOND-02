import React, { useContext, useState } from 'react';
import '../utils/modal.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { AppContext } from '../AppContext';
import axios from 'axios';

const LoginModal = () => {
  const context = useContext(AppContext);
  const [ismatched, setIsmatched] = useState(true);

  const { setUserId, setJwt, setTokenAmount, setLoginModalOpen, setIsLoggedin, setAddress, setUserProfileImg } = context.action;
  const open = context.state.loginmodalOpen;
  const close = () => {
    setLoginModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post('http://localhost:3001/users/login', {
      userId: data.get('id'),
      password: data.get('password')
    }, {
      withCredentials: true
    })
      .then((res) => {
        // Web API에서 받은 token 값을 jwt context에 넣습니다.
        console.log(res.data)
        setTokenAmount(res.data.user.tokenAmount)
        setJwt(res.data.token);
        setIsLoggedin(true);
        setUserId(res.data.user.userId);
        setUserProfileImg(res.data.user.profileImage);
        setAddress(res.data.user.address);

        close();
      }).catch((err) => {
        setIsLoggedin(false);
        setIsmatched(false);
        console.error(err);
      });
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open
        ? (
          <section>
            <header>
              Sign In
              <button className='close' onClick={close}>
                &times;
              </button>
            </header>
            <main>
              <ThemeProvider theme={context.state.theme}>
                <Container component='main' maxWidth='xs'>
                  <CssBaseline />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: 'background.lock' }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                      Sign In
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='id'
                        label='ID'
                        name='id'
                        autoComplete='id'
                        autoFocus
                      />
                      <TextField
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                      />
                      <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                    </Box>
                    {ismatched ? null : <Alert severity="error" sx={{width:"100%"}}><AlertTitle>아이디 비밀번호를 확인해주세요</AlertTitle><strong>Check ID or Password</strong></Alert>}
                  </Box>
                </Container>
              </ThemeProvider>
            </main>
            <footer>
              <button className='close' onClick={close}>
                close
              </button>
            </footer>
          </section>
          )
        : null}
    </div>
  );
};

export default LoginModal;
