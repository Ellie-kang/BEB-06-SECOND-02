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


const App = () => {
    // 서버에서 account 데이터를 불러와서 contextAPI로 저장.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [userContents, setUserContents] = useState('');
  const [userNft, setUserNft] = useState('');
  //const [imgFile, setImgFile] = useState('');

  const [isLoggedin, setIsLoggedin] = useState(false);
  // 회원가입 모달
  const [loginmodalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[600],
      },
    },
  });


  const context = {
    state: {
      name: name,
      email: email,
      tokenAmount: tokenAmount,
      userContents: userContents,
      userNft: userNft,
      isLoggedin: isLoggedin,
      loginmodalOpen:loginmodalOpen,
      signupmodalOpen: signupModalOpen,
      theme: theme
      //imgFile: imgFile
    },
    action: {
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