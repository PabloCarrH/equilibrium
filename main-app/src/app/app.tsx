import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login';
import { Contact } from 'lucide-react';
import { About } from './components/layout/about';
import Blog from './components/layout/blog';
import BookingSystem from './components/layout/booking-system';
import GeriatricCenter from './components/layout/geriatric-center';
import HealthServices from './components/layout/health-services';
import Services from './components/layout/service';
import { Testimonials } from './components/layout/testimonials';
import { Hero } from './components/layout/hero';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Hero />} />
          <Route path="services" element={<Services />} />
          <Route path="health-services" element={<HealthServices />} />
          <Route path="geriatric-center" element={<GeriatricCenter />} />
          <Route path="booking" element={<BookingSystem />} />
          <Route path="blog" element={<Blog />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
