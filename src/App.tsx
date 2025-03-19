import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router'
import Clarity from './pages/Clarity'
import ClarityView from './pages/ClarityView'
import Footer from './components/shared/Footer';

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="apropos" element={<About />} />
        <Route path="realisations" element={<Clarity />} />
        <Route path="realisations/:slug" element={<ClarityView />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
