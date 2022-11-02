import React, { useContext, useEffect } from "react";
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
import axios from "axios"

const Header = () => {
  
  const context = useContext(AppContext);
  const {cookie} = context.state;
  const {setUserId, setJwt, setEmail, setTokenAmount, setUserArticles, setUserNft, setLoginModalOpen, setIsLoggedin, setAddress, setImgSrc}= context.action;

   useEffect(()=> {
    if(cookie.token != undefined){
      axios.get('http://localhost:3001/users/refresh',{
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data)
        // Web API에서 받은 token 값을 jwt context에 넣습니다.
        setJwt(res.data.token);
        setIsLoggedin(true);
        setUserId(res.data.userId);
        setImgSrc(res.data.profile)

          // setEmail, setTokenAmount, setUserArticles, setUserNft 
      }).catch((err) => {
        setIsLoggedin(true);
        console.log(err);
      })
    }
  }, []);
  


  const IsLogin = () => {
    return (
      <>
        <Stack spacing={3} direction="row" sx={{
          justifyContent: "flex-end",
          pr: "56px",
          width: "200px",
          boxShadow: 0,
          alignItems: "center"
        }}>
          <NavLink style={{ textDecoration: "none" }} to='/account'><HeaderButton name="Send" cb={() => { }} /></NavLink>
          <NavLink style={{ textDecoration: "none" }} to='/mint'><HeaderButton name="Mint" cb={() => { }} /></NavLink>
          <NavLink style={{ textDecoration: "none" }} to='/write'><HeaderButton name="Write" cb={() => { }} /></NavLink>
          <NavLink to='/account'><Avatar alt="Remy Sharp" src={context.state.imgSrc} /></NavLink>
        </Stack>
      </>
    )
  }

  const IsNotLogin = () => {
    return (
      <Stack spacing={3} direction="row" sx={{
        pr: '40px',
        justifyContent: "flex-end",
        boxShadow: 0,
      }}>
        <HeaderButton name="Sign In" cb={() => context.action.setLoginModalOpen(true)} />
        <HeaderButton name='Sign up' cb={() => context.action.setSignupModalOpen(true)} />
        <LoginModal cookie={cookie}/>
        <SignupModal />
      </Stack>
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
              fontSize: 22
            }}
              component="a"
              href="/"
            >TAKO</Typography>
          </Box>
          {/* <Box component="img" sx={{ml: 3, overflow: "hidden", borderRadius: 70, width: "auto", height:72,}} alt=''src="https://img.freepik.com/free-vector/cute-octopus-eating-takoyaki-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated-pr_138676-4795.jpg?size=338&ext=jpg&ga=GA1.2.560317433.1666977347" ></Box> */}
          <Box sx={{ flexGrow: 1 }}></Box>
          {context.state.isLoggedin ? <IsLogin /> : <IsNotLogin />}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;