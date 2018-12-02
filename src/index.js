import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer  } from 'redux-form';

import reducer from './reducer';
import reducer1 from './reducer/reducer1';

const reducers = {
  addA: reducer,
  subB: reducer1,
  form: formReducer  
}

const reducerr = combineReducers(reducers)

const store = createStore(reducerr);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

