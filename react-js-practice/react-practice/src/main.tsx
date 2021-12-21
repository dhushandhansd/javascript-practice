import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import RootReducer from './redux/reducers/RootReducer'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {watchBuy} from './redux/sagas/saga'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  RootReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchBuy)

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
