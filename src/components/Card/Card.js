import React from 'react'

export default function Card({ render}) {
  
    const [ header, setHeader, ] = React.useState('') 
    
    const style = {
        margin: '1rem',
        padding: '1rem',
        borderRadius: '7px',
        boxShadow: '0 2px 4px grey'
    }

    return (
        <div>
            { render(style, header, setHeader, ) }            
        </div>
    )
}
