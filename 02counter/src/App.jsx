import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // to propogate into dom we use usestate
  // usestate return an arr with two val, 0th-> var, 1th-> fun.
  let [counter, setCounter] = useState(15);
  // let counter = 5;

  const addValue = () => {
    // counter++;
    setCounter(++counter);
    console.log(counter);
  }
  
  const removeVal = () =>{
    if (counter > 0)
    {
      setCounter(--counter);
    }
  }


  return (
    <>
      <div>
        <h1>Chai Aur Code!!!</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick={removeVal}>remove value</button>
      </div>
    </>
  )
}

export default App
