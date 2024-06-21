import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NewsContextProvider from './contextApi/NewsContextProvider.js';
import NewsDetail from './components/NewsDetail.js';
import NewsBody from './components/NewsBody.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<NewsBody/>}/>
      <Route path='/NewsDetail' element={<NewsDetail/>}/>
    </Route>
      
    
    
  )
)
root.render(
  <React.StrictMode>
    <NewsContextProvider>
   <RouterProvider router={router}/>
   </NewsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
