import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ROUTES/App.jsx'
import { BrowserRouter, Router } from 'react-router'
import AuthProvider from './Provider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
