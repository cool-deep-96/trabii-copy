import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import Homepage2 from './Pages/Homepage2';
import ForUser from './Pages/ForUser';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Homepage2/>} />
      <Route path='/pre-register' element={<div>kuldeep</div>} />
      <Route path='/for-users' element={<ForUser/>} />
      <Route path='/for-business-owners' element={<div>kuldeep</div>} />
      <Route path='/contact' element={<div>kuldeep</div>} />
      <Route path='/services' element={<div>kuldeep</div>} />
      <Route path='/legality' element={<div>kuldeep</div>} />
      <Route path='/privacy-policy-app' element={<div>kuldeep</div>} />
      <Route path='/privacy-policy-website' element={<div>kuldeep</div>} />
      <Route path='/terms-and-conditions' element={<div>kuldeep</div>} />
      <Route path='/refund-policy' element={<div>kuldeep</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)