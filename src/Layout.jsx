import { Outlet } from 'react-router-dom';
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer';

function Layout() {
  return (
    <div className=' w-full min-h-screen overflow-x-hidden pt-16'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Layout;
