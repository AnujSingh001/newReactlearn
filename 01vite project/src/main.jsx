import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Anuj from './Anuj.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Anuj/>
  </StrictMode>,
)
