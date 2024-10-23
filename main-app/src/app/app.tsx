import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
