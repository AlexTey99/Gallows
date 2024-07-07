import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainContainer } from './container/MainContainer';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './styles/index.scss';

const root = createRoot(document.getElementById('root')); 

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<MainContainer />} />
      </Routes>
    </Router>
  </Provider>
);



