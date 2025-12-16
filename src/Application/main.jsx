import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Design system/Shared/colors.css'
import '../Design system/Shared/fonts.css'
import '../Design system/Shared/styles.css'
import LandingPage from '../Samples/landingPage/landing_page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)