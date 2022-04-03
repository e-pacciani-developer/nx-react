import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/app';

const rootEl = document.getElementById('root');

if (!rootEl) throw new Error('Root element not found');

const root = ReactDOM.createRoot(rootEl);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
