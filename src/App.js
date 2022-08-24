
import './App.css';
import { Box, Text } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import Carasoule from './Components/Carasoule';
import { Login } from './Components/login/Login';
import { Nav } from './Components/Navbar/Nav';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     {/* <Carasoule/> */}
     {/* <Login/> */}
     {/* <Footer/> */}
     <Home/>
     
    </div>
  );
}

export default App;
