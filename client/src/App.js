import React from 'react';
import { Route, Routes } from 'react-router-dom';

import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import MintPage from './pages/MintPage';
import WritePage from './pages/WritePage';
import AccountPage from './pages/AccountPage';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/account' element={<AccountPage />} />
      <Route path='/detail' element={<DetailPage />} />
      <Route path='/write' element={<WritePage />} />
      <Route path='/mint' element={<MintPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App