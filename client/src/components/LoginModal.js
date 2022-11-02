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
import { AppContext } from '../AppContext';
import axios from "axios"


const LoginModal = () => {
  const context = useContext(AppContext);
  const [ismatched, setIsmatched] = useState(true);
  
  const {setUserId, setJwt, setEmail, setTokenAmount, setUserArticles, setUserNft, setLoginModalOpen, setIsLoggedin, setAddress, setImgSrc}= context.action;
  const open = context.state.loginmodalOpen;
  const close = () => {
    setLoginModalOpen(false);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get('id'),
      password: data.get('password'),
    });

    axios.post('http://localhost:3001/users/login',{
      userId : data.get('id'),
      password: data.get('password')
    }, {
      withCredentials: true
    })
    .then((res) => {
      console.log(res)
      // Web API에서 받은 token 값을 jwt context에 넣습니다.
      setJwt(res.data.token);
      setIsLoggedin(true);
      setUserId(res.data.userId);
      console.log(res.data.userId);
      setImgSrc(res.data.profile);
      
        // setEmail, setTokenAmount, setUserArticles, setUserNft 

      close();

    }).catch((err) => {
      setIsLoggedin(true);
      setIsmatched(false);
      console.log(err);
    })
   // DB 에서 불러온 데이터랑, id, password랑 비교해서 close를 결정. 같으면 setIsLoggedIn을 true로 아니면 비밀번호를 확인해주세요.
   // setIsmathced();
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
          <main>
            <ThemeProvider theme={context.state.theme}>
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
                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
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
                  {ismatched ? null : <Typography sx={{color: 'black'}}>비밀번호를 확인해주세요</Typography>}
                </Box>
              </Container>
            </ThemeProvider>
          </main>
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

