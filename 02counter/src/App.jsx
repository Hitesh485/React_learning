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
    // setCounter(counter+1);
    // now what happend if we add multiple counters
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);

    // if we done this way then only set one counter at a time.
    // now, in setCounter we get a callback function which describe the existing state.


    // here prevCounter nothing but actually a counter itself but, for better understanding we write as prevCounter... this prevCounter hold prev value of state i.e. counter.

    // here call back fun -> () => {} like this but {} have to remove varna return krni padegi value. this concept is in classic js.
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    // now increase value upto 3x times
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
