import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Starter from './starter/Starter.jsx'

import './index.css'

createRoot(document.getElementById('home')).render(
  <StrictMode>
    <Starter />
  </StrictMode>,
)
