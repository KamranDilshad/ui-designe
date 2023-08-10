import React from 'react'
import './whatGpt.css'
import Feature from '../feature/Feature'
const WhatGPT = () => {
  return ( 
    <div className='gpt3__whatgpt3 section__margin' id='whatgpt'>
      <div className='gpt3__whatgpt3-feature  '>
      <Feature title='What is GPT3' text='GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text.'/>
      </div>
      <div className='gpt3__whatgpt3-heading' >
        <h1 className='gradient__text'> The possibilty are beyond your imagination</h1>
        <p>Explore the Library </p>
      </div>
      <div className='gpt3__whatgpt3-container' >
        <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
        <Feature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
        <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
      </div>
    </div>
  )
}

export default WhatGPT
