import Login from './components/login';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
}

export default App;
