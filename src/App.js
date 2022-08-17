
import logo from "./logo.svg";
import "./App.css";
import PlasticUse from "./Components/PlasticUse.js";
import Transportation from "./Components/Transportation.js";
import { useState } from "react";
import './App.css';
import Login from './Components/Login';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    let displayedQuestion;
    if (!question1) {
        displayedQuestion = <PlasticUse setQuestion1={setQuestion1} />;
    } else if (question1 && !question2) {
        displayedQuestion = <Transportation setQuestion2={setQuestion2}/>
    }



        return (
            <div className="App">
                {displayedQuestion}
            </div>
        );






function App() {
  return (
    <ChakraProvider>
    <div>
    
<Login/> 
    </div>
    </ChakraProvider>
  );

}

export default App;
