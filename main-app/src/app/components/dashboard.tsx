import { Outlet, Route, Routes } from 'react-router-dom';
import { Contact } from 'lucide-react';
import { About } from './layout/about';
import { Testimonials } from './layout/testimonials';
import BookingSystem from './layout/booking-system';
import Footer from './layout/footer';
import GeriatricCenter from './layout/geriatric-center';
import HealthServices from './layout/health-services';
import Navbar from './layout/navbar';
import Services from './layout/service';
import Blog from './layout/blog';

function Dashboard() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Dashboard;
