import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import GetBalance from './pages/GetBalance/GetBalance';

function App() {
  return (
   <ChakraProvider>
    <Routes>
      <Route path='/' element={<GetBalance />}/>
    </Routes>
   </ChakraProvider>
  );
}

export default App;
