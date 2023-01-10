import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import GetBalance from './pages/GetBalance/GetBalance';
import KeyPairs from './pages/KeyPairs/KeyPairs';
import PingData from './pages/PingData/PingData';
import TransferSol from './pages/TransferSol/TransferSol';

function App() {
  return (
   <ChakraProvider>
    <Routes>
      <Route path='/' element={<GetBalance />}/>
      <Route path='/keypairs' element={<KeyPairs />}/>
      <Route path='/pingdata' element={<PingData />}/>
      <Route path='/transfersol' element={<TransferSol />}/>
    </Routes>
   </ChakraProvider>
  );
}

export default App;
