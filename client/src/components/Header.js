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
import { Stack } from "@mui/material";
import { AppContext } from "../AppContext";
import HeaderButton from "./HeaderButton";

const Header = () => {
  const context = useContext(AppContext);
  // yellow color


  const IsLogin = () => {
    return (
      <>
        <Stack spacing={3} direction="row" sx={{
           justifyContent: "flex-end",
           pr: 3,
           width: "200px",
           boxShadow: 0,
           alignItems: "center"}}>
          <NavLink style={{textDecoration:"none"}} to='/account'><HeaderButton name="Send" cb={() => {}}/></NavLink>
          <NavLink style={{textDecoration:"none"}} to='/mint'><HeaderButton name="Mint" cb={() => {}}/></NavLink>
          <NavLink style={{textDecoration:"none"}} to='/write'><HeaderButton name="Write" cb={() => {}}/></NavLink>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> {/* send와 합치는거 고민해보기. */}
        </Stack>
      </>
    )
  }

  const IsNotLogin = () => {
    return (
      <>
        <Stack spacing={3} direction="row" sx={{
          pr: 7,
          width: "auto",
          boxShadow: 0,
          }}>
          <HeaderButton name="Sign In" cb={() => context.action.setLoginModalOpen(true)}/>
          <HeaderButton name='Sign up' cb={() => context.action.setSignupModalOpen(true)}/>
          <LoginModal/>
          <SignupModal/>
        </Stack>
      </>
    )
  }

  return (
    <ThemeProvider theme={context.state.theme}>
      <AppBar sx={{
        position: "sticky",
        boxShadow: 0,
        maxHeight: "80px",
        bgcolor: "background.header",
        mt: "-8px",
        height: "80px",
        justifyContent: "center"  
      }}>
        <Toolbar disableGutters>
          <Box>
            <Typography sx={{
              fontWeight: 600,
              letterSpacing: '2px',
              textDecoration: 'none',
              pl: 7,
              color: "text.primary",
              fontSize: 27
            }}
            variant="h6"
            component="a"
            href="/"
            >Takoyaki</Typography>
          </Box>
          {/* <Box component="img" sx={{ml: 3, overflow: "hidden", borderRadius: 70, width: "auto", height:72,}} alt=''src="https://img.freepik.com/free-vector/cute-octopus-eating-takoyaki-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated-pr_138676-4795.jpg?size=338&ext=jpg&ga=GA1.2.560317433.1666977347" ></Box> */}
          <Box sx={{ flexGrow: 1}}></Box>
          {context.state.isLoggedin ? <IsLogin /> : <IsNotLogin/>}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;