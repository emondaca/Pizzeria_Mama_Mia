import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import TokenProvider from './context/TokenContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <App />
      </TokenProvider>
    </BrowserRouter>
  </StrictMode>,
);
