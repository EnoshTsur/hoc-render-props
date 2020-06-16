import React from 'react';
import H1View from './components/H1View/H1View'
import toggle from './components/Toggle/Toggle'

const AView = ({ isToggleOn, handleToggle }) => (
    <div>
        <a href="#">{`${ isToggleOn}`}</a>
        <button onClick={handleToggle}>Click</button>
    </div>

)

const PView = ({ isToggleOn, handleToggle, }) => (
    <div>
        <p>{`${isToggleOn}`}</p>
        <button onClick={handleToggle}>Click ME!</button>
    </div>
)

const WithH1 = toggle(H1View)
const WithA = toggle(AView)
const WithP = toggle(PView)
function App() {

  return (
    <div>
        <WithH1 />
        <WithA />
        <WithP />
   </div>
  );
}

export default App;
