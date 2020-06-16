import React from  'react'
import Toggle from './components/Toggle/Toggle'
import Counter from './components/Counter/Counter'
import Card from './components/Card/Card'

// function GiladComponent({ isToggleOn, handleToggle }) {
//     return (
//         <div>
//             <h1>{`${isToggleOn}`}</h1>
//             <button onClick={handleToggle}>Click Gilad</button>
//         </div>
//     )
// }

const myCard  = text => (
    <Card render={(style, header, setHeader) => ( 
            <div style={style}>
                   <h1>{header}</h1>
                    <p>{text}</p>
                    <input 
                        type="text" 
                        placeholder="Header" 
                        onChange={e => setHeader(e.target.value)}
                     />
            
            </div>
         )
        }
    />
)

const RotemCard = myCard(
    "hi there how are you today? is your dog doberman or man?"
)


const OmerCard = myCard(
    "Bye its been a nice dinner my inner html"
)

console.log(RotemCard)

function App() {

  return (
    <div>
      <Toggle render={(isToggleOn, handleToggle) => (
            <div>
                <h6>{`${isToggleOn}`}</h6>
                <a href="#" onClick={handleToggle}>Click me</a>
            </div>
        )
       }/>

       <hr/>

       <Counter render={(count, increment) => (
           <div>
               <h1>{count}</h1>
               <button onClick={increment}>increment</button>
           </div>
        )}  
        />

        <Card render={style => (
            <div style={style}>
                <h1>Enosh</h1>
                <p>Lorem ipsum dolor sit amet consectetur a
                    dipisicing elit. Veniam
                     nostrum consequuntur reiciendis fa
                     cilis commodi quisquam nesciu
                     nt ea praesentium debitis asperiores at
                     que maxime mollitia possimus, voluptatem
                      provident similique consect
                      etur voluptate tempora.
               </p>
            </div>

        ) } />

        <Card render={style => (
            <div style={style}>
                <h1>Bony</h1>
                <p>Lorem ipsum dolor sit amet consectetur a
                    dipisicing elit. Veniam
                      provident similique consect
                      etur voluptate tempora.
               </p>
            </div>

        ) } />

        {
            RotemCard
        }
        {
            OmerCard
        }


  </div>
  );
}

export default App;
