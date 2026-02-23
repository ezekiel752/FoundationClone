import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </StrictMode>,
)
