import { useState } from "react";
import InputComponent from "./components/InputComponent";
import ShowInput from "./components/ShowInput";
import Counter from "./components/Counter"
import "./App.css";


export default function App() {
  const [val, setVal] = useState("");
  const handleChangeFunction = (e) => setVal(e.target.value);

  const [count, setCount] = useState(0);
  const updateCount = () => setCount(count + 1);

  return (
    <div className="App">
      <InputComponent handleChange={handleChangeFunction}></InputComponent>
      <ShowInput val={val}></ShowInput>
      <div className="countbox">
        <Counter count={count} updateCount={updateCount}></Counter>
        <Counter count={count} updateCount={updateCount}></Counter>
      </div>
    </div>
  );
}

