
import './App.css';
import Login from './Components/Login';
import { ChakraProvider } from '@chakra-ui/react'



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
