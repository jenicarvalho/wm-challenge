import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import './assets/sass/index.scss'
import Home from './pages/home'

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App;
