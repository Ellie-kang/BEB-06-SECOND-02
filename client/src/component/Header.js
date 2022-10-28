import React, {useState} from "react";

import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { Button, Stack } from "@mui/material";

const Header = (props) => {

  // 로그인, 회원가입 모달 
  const [loginmodalOpen, setLoginModalOpen] = useState(false);
  const [signupmodalOpen, setSignupModalOpen] = useState(false);

  const [isLoggedin, setIsLoggedin] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };
  const openSignupModal = () => {
    setSignupModalOpen(true);
  };
  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  // yellow color
  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[600],
      },
    },
  });

  // 로그인 후 버튼
  const handleSendClick = (e) => {
    window.location.href = "/account"
  }
  const handleMintClick = (e) => {
    window.location.href = "/mint"
  }
  const handleWriteClick = (e) => {
    window.location.href = "/write"
  }

  // 로그인했을 때 메뉴
  const IsLogin = () => {
    return (
      <>
      <Stack spacing={3} direction="row" style={{ justifyContent: "flex-end" }}>
        <Button size='medium' variant="contained" component="label" onClick={handleSendClick}>Send</Button>
        <Button size='medium' variant="contained" component="label" onClick={handleMintClick}>Mint</Button>
        <Button size='medium' variant="contained" component="label" onClick={handleWriteClick}>Write</Button>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </Stack>
      </>
    )
  }

  // 로그인 안했을 때 메뉴
  const IsNotLogin = () => {
    return (
      <>
      <Stack spacing={3} direction="row" style={{ justifyContent: "flex-end" }}>
        <Button size='medium' variant="contained" component="label" onClick={openLoginModal}>Login</Button>
        <Button size='medium' variant="contained" component="label" onClick={openSignupModal}>Signup</Button>
        <LoginModal  open={loginmodalOpen} close={closeLoginModal} header="Login" />
        <SignupModal open={signupmodalOpen} close={closeSignupModal} header="Signup"/>
      </Stack>
      </>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0.05}}></Box>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              letterSpacing: '3px',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >Takoyaki</Typography>
          <Box sx={{ flexGrow: 1}}></Box>
          {isLoggedin ? <IsLogin /> : <IsNotLogin/>}   
          <Box sx={{ flexGrow: 0.05}}></Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;