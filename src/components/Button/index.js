import React from 'react'
import './index.css'

const Button = (props) => {

    let classes = "Button "
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    

    return(
        <button className={classes} onClick={ e => props.fpai(props.label)}>
            {props.label}
        </button>
    )
}

export default Button
