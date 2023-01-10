import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Login = React.lazy(() => import("../Auth/Login"));
const About = React.lazy(() => import("./About"));
const ContactUs = React.lazy(() => import("./ContactUs"));
const Home = React.lazy(() => import("./Home"));
const PrivateRoute = React.lazy(() => import("./PrivateRoute"));
const Store = React.lazy(() => import("./Store")); 


const AllRoutes = () => {
  let token = localStorage.getItem('idToken')
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<React.Suspense fallback={<div className='spinner-border m-5'></div>}><Home /></React.Suspense>} />
        <Route path='/store' element={<React.Suspense fallback={<div className='spinner-border m-5'></div>}><PrivateRoute><Store /></PrivateRoute></React.Suspense> } />
        <Route path="/about" element={<React.Suspense fallback={<div className='spinner-border m-5'></div>}><About /></React.Suspense> } />
        <Route path="/ContactUs" element={<React.Suspense fallback={<div className='spinner-border m-5'></div>}> <ContactUs /></React.Suspense>} />
        <Route path="/login" element={<React.Suspense fallback={<div className='spinner-border m-5'></div>}><Login /></React.Suspense> } />
        <Route path="*" element={<React.Suspense fallback={<div className='spinner-border m-5'></div>}><Login /></React.Suspense> } />
      </Routes>
    </div>
  );
}

export default AllRoutes


