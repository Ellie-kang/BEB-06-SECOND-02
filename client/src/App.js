import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';
import MintPage from './Pages/MintPage';
import WritePage from './Pages/WritePage';
import AccountPage from './Pages/AccountPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppContext } from './AppContext';
import { yellow } from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';
import { Shadows } from '@mui/material';
import './App.css'

const App = () => {
    // 서버에서 account 데이터를 불러와서 contextAPI로 저장.
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [userArticles, setUserArticles] = useState('');
  const [userNft, setUserNft] = useState('');
  const [address, setAddress] = useState('0x1929381920399281');
  const [imgSrc, setImgSrc] = useState('');
  

  //login 상태
  const [isLoggedin, setIsLoggedin] = useState(false);
  // 회원가입 모달
  const [loginmodalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  // mui 팔레트
  const theme = createTheme({
    palette: {
      background: {
        paper: "#ffffff",
        footer: "#aed1ef",
        header: "#aed1ef",
        lock: "#aed1ef"
      },
      text: {
        primary: "#ffffff",
      },
      button: {
        primary: "#ba5624"
      },

    },
  });


  const context = {
    state: {
      userId: userId,
      email: email,
      tokenAmount: tokenAmount,
      userArticles: userArticles,
      userNft: userNft,
      address: address,
      imgSrc: imgSrc,
      isLoggedin: isLoggedin,
      loginmodalOpen:loginmodalOpen,
      signupmodalOpen: signupModalOpen,
      theme: theme,
      //imgFile: imgFile
    },
    action: {
      setUserId: setUserId,
      setEmail: setEmail,
      setTokenAmount: setTokenAmount,
      setUserArticles: setUserArticles,
      setUserNft: setUserNft,
      setAddress: setAddress,
      setImgSrc: setImgSrc,
      setIsLoggedin: setIsLoggedin,
      setLoginModalOpen: setLoginModalOpen,
      setSignupModalOpen: setSignupModalOpen
    }
  }


  return (
    <AppContext.Provider value={context}>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='/write' element={<WritePage />} />
        <Route path='/mint' element={<MintPage />} />
      </Routes>
      <Footer />
    </AppContext.Provider>
  )
}

export default App