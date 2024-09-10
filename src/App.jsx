import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../public/css/App.css'
import HeaderComp from './components/header'
import SectionHead from './section-head'
import SectionDisp from './section-disponible'
import Footer from './components/footer'
import Terms from './components/termsCond'
import Calendar from './section-Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>

      
      <HeaderComp/>
      <SectionHead/>
      <SectionDisp/>
      <Routes>
        <Route path="/terms" element={<Terms/>} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
