import React from "react";

const FeedbackOptions = ({onHendleGood,onHendleNeutral,onHendleBad}) => {
    return (
    <div>
    <h2>Please leave feedback</h2>    
    <button type="button" onClick={onHendleGood}>Good</button>
    <button type="button" onClick={onHendleNeutral}>Neutral</button>
    <button type="button" onClick={onHendleBad}>Bad</button>
    </div>
    )
}

export default FeedbackOptions 