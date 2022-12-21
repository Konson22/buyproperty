import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'
// import PropertiesProvder from './context/PropertiesProvider';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    {/* <PropertiesProvder> */}
      <App tab="home" />
    {/* </PropertiesProvder> */}
  </BrowserRouter>
);

