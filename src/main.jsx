import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import local font family once
import '@fontsource-variable/plus-jakarta-sans'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
