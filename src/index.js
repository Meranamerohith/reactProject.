import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminProductList from './components/AdminProductList';
import CustomerProductList from './components/CustomerProductList';
import NotFound from './components/NotFound';

const routing = (
  <Router>

    <div style={  {textAlign : "center"}  }>
      <h3>e-Commerce Application using React JS</h3>
      <hr/>
      <Link to="/">Home</Link>  | 
      <Link to="/Admin">Admin</Link>  | 
      <Link to="/AllProducts">Products</Link>  | 
      <hr />
    </div>


    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Admin" element={<AdminProductList />} />     
      <Route path="/AllProducts" element={<CustomerProductList />} />     
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>

);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
