//import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'fast-text-encoding/text.min.js';
//import { configure } from 'mobx';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//configure({ useProxies: 'never' });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

