import React from 'react'
import "./Input.scss"

const Input = ({ type, placeholder, value, onChange }) => {


    return (
        <>
            <div className="inputField">
                <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input