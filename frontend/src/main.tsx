import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Import HelmetProvider

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider> {/* ✅ Encapsule ton App ici */}
      <App />
    </HelmetProvider>
  </StrictMode>
);
