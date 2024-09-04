import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './FormStore';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>,
    </React.StrictMode>
  </Provider>
);
