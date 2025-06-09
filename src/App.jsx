import { useRef } from "react";

function App() {
  const inputr = useRef(null);

  const HandlerInput = () => {
    inputr.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputr}></input>
      <button onClick={HandlerInput}>focus</button>
    </div>
  );
}

export default App;
