import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ROUTES/App.jsx'
import { BrowserRouter } from 'react-router'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
      </BrowserRouter>
  </StrictMode>,
)
