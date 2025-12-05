import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/providers'
import { TranslationProvider } from './contexts/TranslationContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranslationProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TranslationProvider>
  </StrictMode>,
)
