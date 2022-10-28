import React from 'react';
import { Route, Routes } from 'react-router-dom';

import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';
import MintPage from './Pages/MintPage';
import WritePage from './Pages/WritePage';
import AccountPage from './Pages/AccountPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/account' element={<AccountPage />} />
      <Route path='/detail' element={<DetailPage />} />
      <Route path='/write' element={<WritePage />} />
      <Route path='/mint' element={<MintPage />} />
    </Routes>
  )
}

export default App