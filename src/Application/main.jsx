import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../Samples/landingPage/landing_page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
