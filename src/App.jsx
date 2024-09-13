import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../public/css/App.css'
import HeaderComp from './components/header'
import SectionHead from './pages/head/section-head'
//import SectionDisp from './pages/disp/section-disponible'
import Footer from './components/footer'
import Terms from './components/termsCond'
import Sobre from './pages/sobreNossotros/sobreNossotrosPage'
import Contacto from './pages/ContactoPage/contactoPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <HeaderComp/>
          <SectionHead/>
          <Footer/>
          </>
        }/>    
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/terms" element={<Terms/>} />
      </Routes>
      
    </Router>
  )
}

export default App
