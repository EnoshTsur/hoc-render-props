import React from 'react'

function Toggle({ render, }) {
    
    const [ isToggleOn, setToggleOn, ] = React.useState(false)

    function handleToggle(){
        setToggleOn(pre => !pre)
    }    

    return (
        <div> 
            { render(isToggleOn, handleToggle) }
       </div>
    )
}

export default Toggle
