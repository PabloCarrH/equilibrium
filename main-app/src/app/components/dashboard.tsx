import { Route, Routes } from 'react-router-dom';
import { Footer } from './layout/footer';
import { Navbar } from './layout/navbar';
import { Contact } from 'lucide-react';
import { About } from './layout/about';
import { Hero } from './layout/hero';
import { Services } from './layout/service';
import { Testimonials } from './layout/testimonials';

function Dashboard() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Hero />} /> {/* Renders Hero at /dashboard */}
        <Route path="services" element={<Services />} />{' '}
        {/* Renders at /dashboard/services */}
        <Route path="about" element={<About />} />{' '}
        {/* Renders at /dashboard/about */}
        <Route path="testimonials" element={<Testimonials />} />{' '}
        {/* Renders at /dashboard/testimonials */}
        <Route path="contact" element={<Contact />} />{' '}
        {/* Renders at /dashboard/contact */}
      </Routes>
      <Footer />
    </>
  );
}

export default Dashboard;
