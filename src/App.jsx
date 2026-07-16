import Home from '../pages/Home.jsx'
import Products from '../pages/Products.jsx'
import Location from '../pages/Location.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'



function App() {

  return (
    <>
      
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/location' element={<Location />} />



      </Routes>
      

    </BrowserRouter>
      </>
      )
}

export default App
