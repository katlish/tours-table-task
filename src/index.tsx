import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import getAppStore from './redux/store/store';
import EshetToursPromotions from './components/containers/EshetToursPromotions/EshetToursPromotions'
import { Provider } from 'react-redux';
import { fetchTours } from './redux/actions/tours';
const store = getAppStore();

store.dispatch(fetchTours()); 
console.log("store - ", store);

ReactDOM.render(
  <Provider store={store}>
        <EshetToursPromotions />
  </Provider>
  ,
  document.getElementById('root')
);


