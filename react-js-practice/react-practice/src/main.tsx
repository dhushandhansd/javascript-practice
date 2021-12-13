import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, combineReducers } from 'redux'
import RootReducer from './redux/reducers/RootReducer'
import { Provider } from 'react-redux'

const reducers = combineReducers({
  RootReducer,
});

const store = createStore(reducers);

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
