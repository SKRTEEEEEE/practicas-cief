import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../public/css/App.css'
import HeaderComp from './components/header'
import SectionHead from './pages/head/section-head'
//import SectionDisp from './pages/disp/section-disponible'
import Footer from './components/footer'
//import Terms from './components/termsCond'
//import Sobre from './pages/sobreNossotros/sobreNossotrosPage'

function App() {
  return (
    <Router>
      <div>
      <HeaderComp/>
      <SectionHead/>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
