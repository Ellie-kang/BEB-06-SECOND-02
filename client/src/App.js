import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';
import MintPage from './Pages/MintPage';
import WritePage from './Pages/WritePage';
import AccountPage from './Pages/AccountPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppContext } from './AppContext';
import { createTheme } from '@mui/material/styles';
import { useCookies } from 'react-cookie';

import './App.css';

const App = () => {
  // 서버에서 account 데이터를 불러와서 contextAPI로 저장.

  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [userArticles, setUserArticles] = useState('');
  const [userNft, setUserNft] = useState('');
  const [address, setAddress] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [jwt, setJwt] = useState('');
  const [cookie, setCookie, deleteCookie] = useCookies(['token']);
  // login 상태
  const [isLoggedin, setIsLoggedin] = useState(false);
  // 회원가입 모달
  const [loginmodalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
    // 메인페이지 Articles
  const [mainArticles, setMainArticles] = useState([]);
  // mui 팔레트
  const theme = createTheme({
    palette: {
      background: {
        paper: '#ffffff',
        footer: '#a9def9',
        header: '#a9def9',
        lock: 'rgba(47, 83, 239)',
        yellow: "#F0B918"
      },
      text: {
        primary: '#ffffff',
        secondary: 'black'
      },
      button: {
        primary: '#ba5624'
      }

    }
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
      loginmodalOpen: loginmodalOpen,
      signupmodalOpen: signupModalOpen,
      theme: theme,
      jwt: jwt,
      cookie: cookie,
      mainArticles: mainArticles
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
      setSignupModalOpen: setSignupModalOpen,
      setJwt: setJwt,
      deleteCookie: deleteCookie,
      setCookie: setCookie,
      setMainArticles: setMainArticles
    }
  };

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
  );
};

export default App
;
