import React from "react";
import css from 'components/Feedback/FeedbackOption.module.css'

const FeedbackOptions = ({onHendleGood,onHendleNeutral,onHendleBad}) => {
    // console.log(options)
    return (
    <div className={css.conteinerBtn}>

    <button className={css.btn} type="button" onClick={onHendleGood}>Good</button>
    <button className={css.btn} type="button" onClick={onHendleNeutral}>Neutral</button>
    <button className={css.btn} type="button" onClick={onHendleBad}>Bad</button>

    </div>
    )
}

export default FeedbackOptions 