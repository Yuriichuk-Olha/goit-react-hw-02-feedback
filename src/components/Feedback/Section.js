import PropTypes from 'prop-types'; 
import React from "react"


const Section =({ title, children})=>{

    return (
        <>
            <h1>{title}</h1>
            {children}
        </>
    )        
}

Section.propTypes = {
    title:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}

export default Section