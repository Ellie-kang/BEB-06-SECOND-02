import React, { useContext } from 'react';
import '../utils/modal.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { AppContext } from '../AppContext';

const SignupModal = () => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const context = useContext(AppContext);
  const open = context.state.signupmodalOpen;
  const close = () => {
    context.action.setSignupModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const p = data.get('password');
    const p_c = data.get('confirm_password');
    if (p !== p_c) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      // DB로 보내기
      axios.post('http://localhost:3001/users/signup', {
        userId: data.get('id'),
        password: data.get('password')
      })
        .then((res) => {
          if (res) {
            switch (res.status) {
              case 201:
                alert('회원가입이 완료되었습니다.');
                break;
              default :
                close();
                throw new Error('Unexpected response status');
            }
          } else {
            close();
            throw new Error('No response');
          }
          close();
        }).catch((err) => {
          console.error(err);
          if (err.response) {
            const status = err.response.status;
            switch (status) {
              case 400 :
                alert('중복된 아이디입니다.');
                break;
            }
          }
        });
    }
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open
        ? (
          <section>
            <header>
              SignUp
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
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: 'background.lock' }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                      Sign up
                    </Typography>
                    <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            autoComplete='id'
                            name='id'
                            required
                            fullWidth
                            id='id'
                            label='ID'
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id='password'
                            label='Password'
                            type='password'
                            name='password'
                            autoComplete='password'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name='confirm_password'
                            label='Confirm Password'
                            type='password'
                            id='confirm_password'
                            autoComplete='new-password'
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign Up
                      </Button>
                    </Box>
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

export default SignupModal;
