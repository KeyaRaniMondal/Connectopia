// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './ROUTES/App.jsx'
// import { BrowserRouter, Router } from 'react-router'
// <<<<<<< HEAD
// import AuthProvider from './Provider/AuthProvider.jsx'
// =======
// import AuthProvider from './providers/Authprovider.jsx'
// >>>>>>> e7d3d113b4477930e60bd97e9f5730dfe9d8f8fe


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//     <BrowserRouter>
//       <App></App>
//     </BrowserRouter>
//     </AuthProvider>
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ROUTES/App.jsx'
import { BrowserRouter } from 'react-router'
import AuthProvider from './Provider/AuthProvider.jsx' // or the correct one

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
