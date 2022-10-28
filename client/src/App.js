import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Main from './pages/Main';
import Footer from './component/Footer/Footer';

function App() {
  return (
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
}

export default App;
