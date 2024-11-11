import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter   future={{
        v7_relativeSplatPath: true,
         v7_startTransition: true,
      }}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
)
