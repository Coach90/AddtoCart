import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Nav from './components/nav';
import Productdata from './components/Productdata';
import { Provider } from 'react-redux';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
 {/* <Home/> */}
 <Nav></Nav>
 <Productdata/>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

