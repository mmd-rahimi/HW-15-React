// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './Header of page/Header'
import { StrictMode } from 'react'
import { Footer } from './Footer of page/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Footer />
  </StrictMode> 
)
