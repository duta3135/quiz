import React from 'react'
import Styles from '../styles/Question.module.css'
function Question({question, correct_answer, incorrect_answer}) {
    
    const pilihan = [correct_answer, ...incorrect_answer]
    
    return (
        <div className={Styles.cardN}>
            <h3>{question}</h3>
            {pilihan.map((text, index)=><h5 key={index} onClick={(e) => {e.stopPropagation()
            const}}>{text}</h5>)}
        </div>
    )
}

export default Question
