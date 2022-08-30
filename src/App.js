import './App.css';
import React, {useEffect, useState} from 'react'
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Data from './Components/data.json'
import Result from './Components/Result';


let takenTime

function App() {
  const [step,setStep]=useState(1);
  const [index,setIndex]=useState(0);
  const [ans,setAns]=useState([]);
  const [time,setTime]=useState(0);

  const tryAgainHandle=()=>{
    setIndex(0);
    setAns([]);
    setStep(2);
    //continue timing
     takenTime=setInterval(()=>{
      setTime(prevTime=>prevTime+1);
    },1000);
    }

  

  const quizStart=()=>{
  setStep(2)
  //start time
   takenTime=setInterval(()=>{
    setTime(prevTime=>prevTime+1);
  },1000);
  }
  useEffect(()=>{
    //stop time
    if(step===3){
    clearInterval(takenTime)
    }
  })
  return (
    <div className="App">
    {step===1 && <Home onQuestionStart={quizStart} />  }
    {step===2 && <Quiz 
      data={Data.data[index]}
      updateAns={setAns}
      numOfQuestions={Data.data.length}
      activeQuestion={index}
      updateQuestion={setIndex}
      updateStep={setStep}
    />}

    {step===3 && <Result 
      results={ans}
      data={Data.data}
      tryAgain={tryAgainHandle}
      time={time}

    /> }
      
      
    </div>
  );
}

export default App;
