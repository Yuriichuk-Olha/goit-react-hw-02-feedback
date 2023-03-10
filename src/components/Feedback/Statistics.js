import React from "react";

export default function Statistics({good, neutral, bad, total,PositivePercentage}){
    return ( 
    <div>
        <h3>Statistics</h3>
    <ul>        
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {PositivePercentage}%</li>
    </ul>
    </div>    
    ) 
    
};