import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <div className='hero-btns'>
            <img src='images/coder.jpg'></img>
            <Button
                className='btn'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                destination='/resume'
            >
                The Coder
            </Button>
            <img src='images/shoot1.jpg'></img>
            <Button
                className='btn'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                destination='portfolio'

            >
                The Model 
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
