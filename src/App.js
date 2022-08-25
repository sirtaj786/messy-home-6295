
import './App.css';
import { Box, Text } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import Carasoule from './Components/Carasoule';
import { Login } from './Components/login/Login';
import { Signup } from './Components/login/Signup';
import { Nav } from './Components/Navbar/Nav';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { MackupProduct } from './Components/Product-Page/MackupProduct';
import { HairProduct } from './Components/Product-Page/HairProduct';
import { CheckoutPage } from './Components/checkout/CheckoutPage';
import { Payment } from './Components/paymentDet/PaymentPage';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Carasoule/> */}
     {/* <Login/> */}
     {/* <Footer/> */}
     {/* <Home/> */}
     {/* <Nav/> */}
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        {/* <Route path="/otp" element={<OTP />}></Route> */}
        <Route path="/signup" element={<Signup />}/>

        <Route path="/hairproduct" element={<HairProduct />}/>
        <Route path="/mackupproduct" element={<MackupProduct />}/>
        {/* <Route path="/productdetail" element={<ProductDetails />}></Route> */}
        <Route path="/checkoutpage" element={<CheckoutPage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/payment" element={<Payment />}/>
      </Routes>
     
    </div>
  );
}

export default App;
