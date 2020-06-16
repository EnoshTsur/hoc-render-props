import React from 'react'

// HOC
// Higher Order Component

function toggle(Component) {

    function Container() {
        const [isToggleOn, setToggleOn, ] = React.useState(false)

        function handleToggle() {
            setToggleOn(pre => !pre)
        }

        return (
            <Component isToggleOn={isToggleOn} handleToggle={handleToggle} />
        )

    }
    
  return Container
}

export default toggle
