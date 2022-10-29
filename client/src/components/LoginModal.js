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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppContext } from '../AppContext';

const LoginModal = () => {
  const context = useContext(AppContext)  
  const [ismatched, setIsmatched] = useState(true);

  const open = context.state.loginmodalOpen;
  const close = () => {
    context.action.setLoginModalOpen(false);
  }
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get('id'),
      password: data.get('password'),
    });

   // DB 에서 불러온 데이터랑, id, password랑 비교해서 close를 결정. 같으면 setIsLoggedIn을 true로 아니면 비밀번호를 확인해주세요.
   // setIsmathced();
    context.action.setIsLoggedin(true);
    close();
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            Sign In
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main><ThemeProvider theme={context.state.theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'background.lock' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="id"
                    label="ID"
                    name="id"
                    autoComplete="id"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Box>
                {ismatched ? <Typography>나나나</Typography> : <Typography>비밀번호를 확인해주세요</Typography>}
              </Box>
            </Container>
          </ThemeProvider></main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default LoginModal;

