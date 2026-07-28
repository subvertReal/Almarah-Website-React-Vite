import Home from '../pages/Home.jsx'

import Location from '../pages/Location.jsx'

// men clothing dropdown
import ShalwarKameez from '../../almarah-reactvite/pages/mensClothing/ShalwarKameez.jsx';
import Waistcoat from '../../almarah-reactvite/pages/mensClothing/Waistcoat.jsx';

// grooms wear dropdown
import Princecoats from '../../almarah-reactvite/pages/groomswear/Princecoats.jsx';
import FancyKurtas from '../../almarah-reactvite/pages/groomswear/FancyKurtas.jsx';
import Sherwanis from '../../almarah-reactvite/pages/groomswear/Sherwanis.jsx';

// misc
import Caps from '../../almarah-reactvite/pages/misc/Caps.jsx';
import Footwear from '../../almarah-reactvite/pages/misc/Footwear.jsx';
import Shawls from '../../almarah-reactvite/pages/misc/Shawls.jsx';
import Turban from '../../almarah-reactvite/pages/misc/Turban.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'



function App() {

  return (
    <>
      
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        
        {/* mensClothing */}
        <Route path='/shalwar-kameez' element={<ShalwarKameez />} />
        <Route path='/waistcoat' element={<Waistcoat />} />

        {/* groomswear */}
        <Route path='/fancy-kurta' element={<FancyKurtas />} />
        <Route path='/princecoat' element={<Princecoats />} />
        <Route path='/sherwanis' element={<Sherwanis />} />

        {/* misc */}
        <Route path='/caps' element={<Caps />} />
        <Route path='/footwear' element={<Footwear />} />
        <Route path='/shawls' element={<Shawls />} />
        <Route path='/turban' element={<Turban />} />

      </Routes>
      

    </BrowserRouter>
      </>
      )
}

export default App
