import React from 'react'
import "./Input.scss"

const Input = (props) => {
    return (
        <>
            <div className="inputField">
                <input type={props.type} placeholder={props.placeholder} />
            </div>
        </>
    )
}

export default Input