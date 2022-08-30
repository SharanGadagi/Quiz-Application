import React, { useState, useEffect } from 'react'
import { convertTime } from './timeConvert'
import './result.css'


const Result = ({ results, data, tryAgain, time }) => {
    const [correctAns, setCorrectAns] = useState(0);

    useEffect(() => {
        let correct = 0;
        results.forEach((result, index) => {
            if (result.a === data[index].Answer) {
                correct++;
            }
        });
        setCorrectAns(correct);
    }, [])

    const calculateScore = (correctAnswers, totalQuestions) => {
        return Math.floor((correctAnswers / totalQuestions) * 100);
    };

    const score = calculateScore(correctAns, data.length)

    return (
        <>
            <div className="result_container">
            <div className="result">
                <div className="status">
                    <h1 className='win_or_loss' >{score >= 40 ?
                        `Congratulations 👍`
                        : `Better Luck Next Time! 😒 `} </h1>
                    <h2>{score >= 40 ?
                        `You Have Won This Game`
                        : `You Have Lost This Game`} </h2>
                    <h3>Total Questions: <strong> {data.length}</strong></h3>
                    <h3>Correct Questions: <strong> {correctAns}</strong></h3>
                    <h3>Your Score: <strong>{correctAns}</strong>/<strong>{data.length}</strong></h3>
                    <h3>Your Percentage: <strong>{score}%</strong></h3>
                    <h3>Time Taken To Complete Quiz: <strong>{convertTime(time)} </strong></h3>

                </div>
                <div className="button">
                    <button className='tryAgain_btn' onClick={tryAgain}>TRY AGAIN</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Result;
