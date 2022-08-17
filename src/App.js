import logo from "./logo.svg";
import "./App.css";
import PlasticUse from "./Components/PlasticUse.js";
import Transportation from "./Components/Transportation.js";
import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './Components/Profile.js'
import Results from "./Components/Results";

function App() {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [results, setResults] = useState("")
 
  return (
    <ChakraProvider>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="plastic" element={<PlasticUse setQuestion1={setQuestion1} question1={question1}/>} />
        <Route path="profile" element={<Profile  /> } />
        <Route path="transportation" element={<Transportation question2={question2} setQuestion2={setQuestion2} />} />
        <Route path="results" element={<Results results={results} setResults={setResults} />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
