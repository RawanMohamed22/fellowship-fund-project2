import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Signup from './pages/Signup'

// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Signup/>
    {/* <App /> */}
  </StrictMode>,
)
