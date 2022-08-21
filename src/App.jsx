import React from 'react';
import './App.css';

import Container from './HomePage/Container';
import Main from './HomePage/Main';
import Footer from './HomePage/Footer';
import Login from './Login/Login';
import Signup from './Login/Signup';/* 
import Carrossel from './pages/Carrossel/Carrossel'; */
function App() {
    return (
     
        <div className="App">
            <Login/>
            <Main/>
            <Container/>
            <Footer/>   
            
        </div>

        
    );
}

            export default App;

            