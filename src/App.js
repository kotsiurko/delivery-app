import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import { Container } from '@mui/material'
import Footer from './components/Footer';
import './styles/styles.css'
import Item from './components/Item';
import Stores from './components/Stores';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />

        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/fakestore" element={<Stores />} />
            <Route path="/escuelajs" element={<Stores />} />
            <Route path="/fakestore/:id" element={<Item />}></Route>
            <Route path="/escuelajs/:id" element={<Item />}></Route>
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
