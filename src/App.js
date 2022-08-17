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

function App() {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  let displayedQuestion;
  if (!question1) {
    displayedQuestion = <PlasticUse setQuestion1={setQuestion1} />;
  } else if (question1 && !question2) {
    displayedQuestion = <Transportation setQuestion2={setQuestion2} />;
  }

  return (
    <ChakraProvider>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="plastic" element={<PlasticUse />} />
        <Route path="profile" element={<Profile />} />
        <Route path="trans" element={<Transportation />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
