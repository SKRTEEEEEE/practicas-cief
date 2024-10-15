import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/css/index.css'
import '../public/css/boton-selector.css'
import AppRouter from './app-router.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
