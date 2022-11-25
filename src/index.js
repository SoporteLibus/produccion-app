import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Milacron from './components/Milacron';
import Arburg from './components/Arburg';
import Bmb from './components/Bmb';
import Login from './components/Login';
import Search from './components/Search';
import FormPage from './components/FormPage';
import ListPage from './components/ListPage';
import LoadFile from './components/LoadFile';
import Back from './components/Back';
import Footer from './components/Footer';
import Nav from './components/NavBar';
import Error from './components/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav />
    <Back />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/milacron' element={<Milacron />} />
      <Route path='/arburg' element={<Arburg />} />
      <Route path='/bmb' element={<Bmb />} />
      <Route path='/login' element={<Login />} />
      <Route path='/search' element={<Search />} />
      <Route path='/formpage' element={<FormPage />} />
      <Route path='/loadfile' element={<LoadFile />} />
      <Route path='/listpage' element={<ListPage />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
