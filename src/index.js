import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import PreRegistar from './Pages/PreRegistar';
import Homepage2 from './Pages/Homepage2';
import ForUser from './Pages/ForUser';
import ForBusinessOwners from './Pages/ForBusinessOwners';
import ServicesPage from './Components/Service/ServicePage';
import Contact from './Pages/Contact';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Homepage2/>} />
      <Route path='/pre-register' element={<PreRegistar/>} />
      <Route path='/for-users' element={<ForUser/>} />
      <Route path='/for-business-owners' element={<ForBusinessOwners/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<ServicesPage/>} />
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