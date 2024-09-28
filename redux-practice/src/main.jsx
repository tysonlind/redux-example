import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provier store={store}>
      <App />
    </Provier>
  </StrictMode>,
)
