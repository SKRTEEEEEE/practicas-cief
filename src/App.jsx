import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../public/css/App.css'
import HeaderComp from './components/header'
import HomePage from './pages/head/homePage'
import Footer from './components/footer'
import Terms from './components/termsCond'
import Sobre from './pages/sobreNossotros/sobreNossotrosPage'
import Contacto from './pages/ContactoPage/contactoPage'
import ClientePage from './pages/ClientePage/clientePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <HeaderComp/>
          <HomePage/>
          <Footer/>
          </>
        }/>    
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/cliente" element={<ClientePage/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/terms" element={<Terms/>} />
      </Routes>
      
    </Router>
  )
}

export default App
