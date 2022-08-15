import React from 'react';
import './Result.css'

const Result: React.FC = () => {

   return (
  <section className='Result container'>
    <h3>You win!</h3>
    <img src='./images/frog.png' alt=''/>
    <button>Play again</button>
  </section>

)}

export default Result;
