import React from 'react'

export default function H1View({ isToggleOn, handleToggle, }) {


    return (
        <div>
           <h1>{`is toggle: ${isToggleOn}`}</h1>
           <button onClick={handleToggle}>Toggle</button>          
        </div>
    )
}
