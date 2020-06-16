import React from 'react'

export default function H1View({ isToggleOn, handleToggle }) {
    return (
        <div>
            <h1>{`${isToggleOn}`}</h1>
            <button onClick={handleToggle}>Click</button>
        </div>
    )
}
