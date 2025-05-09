import Chai from './chai';

function App(){
  const username = "Hitesh";
  // {username} is an expression. More specific it is an
  // evaluation expression (final outcome).
  return(
    <>
      <h1>Hello | {username} </h1>
      <Chai/>
    </>
  )
}

export default App;