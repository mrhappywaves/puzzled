import React, { Component } from "react";
// import {
//   // ApollorClient,
//   // InMemoryCache,
//   ApollorProvider,
//   // createHttpLink,
// } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainPage from './pages/MainPage';
import Manage from "./pages/Manage";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<MainPage />} />
            <Route path='/manage' element={<Manage />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  };
};


export default App;
