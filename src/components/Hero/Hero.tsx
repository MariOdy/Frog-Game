import React from 'react';
import Frog from '../Frog/Frog';
import './Hero.css'

const Hero: React.FC = () => {

    const [isActive, setIsActive] = React.useState(false)

    const startGame = () => (
        setIsActive(prev=> !prev)
    )

   return (
  <div className='Hero container'>
    {isActive? 
    <Frog />
    :
    <button className='start-btn' onClick={startGame}>Click me</button>
    }
  </div>

)}

export default Hero;
