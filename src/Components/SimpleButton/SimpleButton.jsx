import React from 'react'
import "./SimpleButton.css"

const SimpleButton = (prop) => {
    return (
        <>
            <div id='button'>
                <button className='btn'>{prop.button}</button>
            </div>
        </>
    )
}

export default SimpleButton