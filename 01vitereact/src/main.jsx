import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// since App is just a function which we import so we also declare it here.
function MyApp (){
  return(
    <div>
      <h1> MyApp | Vite </h1>
    </div>
  )
}

// this html code as in return statement, is converted(parse) into an obj as in customReact (reactElement). 

// this is react based create obj of create ele
const anotherElement = React.createElement(
  // all these order must be same, as declared in React already.
  'a',
  {href: 'https://google.com/cars', target : '_blank'},
  "Click to visit cars"
)

createRoot(document.getElementById('root')).render(
  // here MyApp nothing but a function, so also call it as a function, but for good practice we don't.
    // MyApp()
    // <MyApp />
    // anotherElement

    <App />
)
