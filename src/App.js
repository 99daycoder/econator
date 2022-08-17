import logo from "./logo.svg";
import "./App.css";
import PlasticUse from "./Components/PlasticUse.js";
import Transportation from "./Components/Transportation.js";
import { useState } from "react";

function App() {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  return (
    <div className="App">
      if (!question1){<PlasticUse setQuestion1={setQuestion1} />}
      <Transportation />
    </div>
  );
}

export default App;
