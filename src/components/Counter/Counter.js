import React from 'react'

export default function Counter({ render, }) {

    const [count, setCount] = React.useState(0)

    function increment() {
        setCount(pre => ++pre)
    }

    return (
        <div>
            { render(count, increment)}            
        </div>
    )
}
