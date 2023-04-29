import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
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