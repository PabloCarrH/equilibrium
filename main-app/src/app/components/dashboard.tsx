import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/health-services" element={<HealthServices />} />
        <Route path="/geriatric-center" element={<GeriatricCenter />} />
        <Route path="/booking" element={<BookingSystem />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Dashboard;
