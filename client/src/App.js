<<<<<<< HEAD
import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Main from './pages/Main';
import Footer from './component/Footer/Footer';
=======
import React from 'react';
import { Route, Routes } from 'react-router-dom';
>>>>>>> c935023aedaa8504bc11e9d73259bf1827b2f345

import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';
import MintPage from './Pages/MintPage';
import WritePage from './Pages/WritePage';
import AccountPage from './Pages/AccountPage';

const App = () => {
  return (
<<<<<<< HEAD
    <div className="container">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
=======
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/account' element={<AccountPage />} />
      <Route path='/detail' element={<DetailPage />} />
      <Route path='/write' element={<WritePage />} />
      <Route path='/mint' element={<MintPage />} />
    </Routes>
  )
>>>>>>> c935023aedaa8504bc11e9d73259bf1827b2f345
}

export default App