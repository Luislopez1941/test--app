import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HeaderLogin from './components/HeaderLogin';
import MainLogin from './components/MainLogin';
import Login from './components/Login';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';


function App() {
  
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;