import React from 'react'
import { Button } from './Button';
import './App.css';
// import './css/home.css';

function Home() {
    return (
        <div className='hero-container'>
      <video src='/video1.mp4' autoPlay loop muted />
      <h1>FIND YOUR NEXT ADVENTURE</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN UP NOW!
        </Button>
       
      </div>
    </div>
  );
}

export default Home;