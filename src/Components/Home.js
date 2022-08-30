import React from 'react'
import './home.css'

const Home = ({ onQuestionStart }) => {
  return (
    <>
      <div className='introduction_container'>
        <div className="introduction">
          <h1 className='app_name'>Welcome To The Demo Quiz Game!</h1>
          <h3 className='features'>Here you will have an opportunity to answer an

            interesting question.</h3>
          <h1 className='start_begin'>Click Start to begin.</h1>
          <button className='start_btn' onClick={onQuestionStart}>START</button>

        </div>
      </div>
    </>
  )
}

export default Home
