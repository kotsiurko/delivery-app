import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Store1 from "./components/Store1";
import Store2 from "./components/Store2";
import { Container } from '@mui/material'
import Footer from './components/Footer';
import './styles/styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />

        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/store1" element={<Store1 />} />
            <Route path="/store2" element={<Store2 />} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
