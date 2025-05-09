import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card  from "../components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {name: "Hitesh", age: 200};
  let myArr = ["Hunny", "Hitesh"];

  return (
    <>
      <div className="flex-col justify-self-center text-white">
        <h1 className="text-4xl bg-green-400 p-4 rounded-xl mb-4 ">
          Tailwind test
        </h1>
        <Card newObj = {myArr} btnText = "Visit Me!" />
      </div>
    </>
  );
}

export default App;
