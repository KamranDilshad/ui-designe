import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home' >
      <div className='gpt__header-content'>
        <h1 className='gradient__text'>Let's Building Something amazing with GPT-3 OpenAI </h1>
      
      <p>Automatically Build Your Stunning Website. Technology that grows alongside your business. Launch a website in less than 5 minutes. Our AI system takes care of the whole process. Stunning Designs. Built-in Marketing Tools. Beautiful Portfolio. No code</p>
      <div className='gpt__header-content_input'>
        <input type='emai' placeholder='Enter your Email address'></input>
        <button type='button'>Get Started</button>
      </div>
      <div className='gpt__header-content_people'>
        <img src={people} alt="people"/>
        <p>16000 people requested access a vist in last 24 hours</p>
      </div>
      </div>
      <div className='gpt__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
