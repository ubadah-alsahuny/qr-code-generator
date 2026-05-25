import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import '@fontsource/stack-sans-notch/200.css';
import '@fontsource/stack-sans-notch/400.css';
import '@fontsource/stack-sans-notch/600.css';
import '@fontsource/stack-sans-notch/700.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
