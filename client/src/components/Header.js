import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Stack } from "@mui/material";
import { AppContext } from "../AppContext";

const Header = () => {
  const context = useContext(AppContext);
  // yellow color


const IsLogin = () => {
  return (
    <>
      <Stack spacing={3} direction="row" style={{ justifyContent: "flex-end" }}>
        <NavLink className="account-link" style={{textDecoration:"none"}} to='/account'><Button size='medium' variant="contained" component="label" >Send</Button></NavLink>
        <NavLink style={{textDecoration:"none"}} to='/mint'><Button size='medium' variant="contained" component="label" >Mint</Button></NavLink>
        <NavLink style={{textDecoration:"none"}} to='/write'><Button size='medium' variant="contained" component="label" >Write</Button></NavLink>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> {/* send와 합치는거 고민해보기. */}
      </Stack>
    </>
  )
}

  const IsNotLogin = () => {
    return (
      <>
        <Stack spacing={3} direction="row" style={{ justifyContent: "flex-end" }}>
          <Button size='medium' variant="contained" component="label" onClick={() => context.action.setLoginModalOpen(true)}>Login</Button>
          <Button size='medium' variant="contained" component="label" onClick={() => context.action.setSignupModalOpen(true)}>Signup</Button>
          {/* 로그인, 회원가입 모달 */}
          <LoginModal/>
          <SignupModal/>
        </Stack>
      </>
    )
  }

  return (
    <ThemeProvider theme={context.state.theme}>
      <AppBar position="static">
        <Toolbar disableGutters>
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
          {context.state.isLoggedin ? <IsLogin /> : <IsNotLogin/>}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;