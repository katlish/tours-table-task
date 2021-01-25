import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import getAppStore from './store/store';
import EshetToursPromotions from './components/EshetToursPromotions/EshetToursPromotions'
import { Provider } from 'react-redux';
import { fetchTours } from './actions/tours';

const store = getAppStore();

store.dispatch(fetchTours()); 

ReactDOM.render(
  <Provider store={store}>
        <EshetToursPromotions />
  </Provider>
  ,
  document.getElementById('root')
);


