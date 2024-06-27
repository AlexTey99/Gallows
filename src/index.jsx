import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainContainer } from './container/MainContainer';
import './styles/index.scss';

const root = createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<MainContainer />} />
      </Routes>
    </Router>
  </React.StrictMode>
);



