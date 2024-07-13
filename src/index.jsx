import React from 'react';
import { createRoot } from 'react-dom/client';
import { MainContainer } from './container/MainContainer';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './styles/index.scss';

const root = createRoot(document.getElementById('root')); 

root.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>
);



