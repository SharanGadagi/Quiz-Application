import React,{useEffect,useRef, useState} from 'react';
import './quiz.css'


const Quiz = ({data,updateAns,numOfQuestions,activeQuestion,updateQuestion,updateStep}) => {
const [selected,setSelected]=useState('');
const optionWrapper=useRef();
const [visible,setVisible]=useState(false)

useEffect(()=>{
    const findcheckedOption=optionWrapper.current.querySelector(('input:checked'))
    if(findcheckedOption){
        findcheckedOption.checked=false;
        
    }
},[data])

    const nextHandleClick=(e)=>{
        updateAns(prevState=>[...prevState, {q:data.Question, a:selected}]);
        setSelected('');
        if(activeQuestion<numOfQuestions-1){
            updateQuestion(activeQuestion+1) 
        }else{
            updateStep(3)
        }
        setVisible(false)
    }
    const resetOptions=()=>{
        const findcheckedOption=optionWrapper.current.querySelector(('input:checked'))
        if(findcheckedOption){
            findcheckedOption.checked=false;
            
        }
        setVisible(false)
    }


    const changeHandler=(event)=>{
setSelected(event.target.value);
    }
    
  return (
   <>
   <div className="main_container">
    <div className="quiz_container"> 
    <div className="questions">
        <h1 className="question">
{data.Question}
        </h1>
    </div>
    <div className="options"  ref={optionWrapper}>
    {data.Options.map((opt,index)=>( <label className='radio inside_opt' key={index}>
            <input type="radio" name='answer' value={opt} onChange={changeHandler}  onClick={()=>setVisible(true)} />
          {opt}
        </label>))}
        
    </div>
    

    {visible && 
        <div className="btn">
        <button className='sure_btn' onClick={nextHandleClick}   >SURE</button>
        {/* <button className='pre_btn' onClick={prevHandleClick}>Previous</button> */}
        <button className='reset_btn' onClick={resetOptions} >RESET</button>
        </div>
    }
    
     
        
    
    

    </div>
    </div>
   </>
  )
}

export default Quiz