import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import PreRegistar from './Pages/PreRegistar';
import PrivacyPolicyApp from './Pages/PrivacyPolicyApp';
import RefundPolicy from './Pages/RefundPolicy';
import Legality from './Pages/Legality';
import TermConditions from './Pages/TermConditions';
import ServicesPage from './Components/Service/ServicePage';
import Contact from './Pages/Contact';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<div>kuldeep</div>} />
      <Route path='/pre-register' element={<PreRegistar />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<ServicesPage/>} />
      <Route path='/legality' element={<Legality/>} />
      <Route path='/privacy-policy-app' element={<PrivacyPolicyApp/>} />
      <Route path='/privacy-policy-website' element={<PrivacyPolicyApp/>} />
      <Route path='/terms-and-conditions' element={<TermConditions/>} />
      <Route path='/refund-policy' element={<RefundPolicy/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)