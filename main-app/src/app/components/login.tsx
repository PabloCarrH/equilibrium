import { useState } from 'react';
import styles from './login.module.scss';
import logo from '../../assets/logos/spa-small.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div
      className="container is-flex is-justify-content-center is-align-items-center"
      style={{ height: '100vh' }}
    >
      <div
        className={`${styles['border-outline']} is-success card`}
        style={{ maxWidth: '400px', margin: 'auto' }}
      >
        <div className="card-content">
          <p className="title is-2 is-spaced">
            Equilibrium Centro de Estética y Spa
          </p>
          <div className="is-flex is-justify-content-center">
            <img src={logo} alt="Logo" />
          </div>
          <hr></hr>
          <p className="subtitle is-4">Autenticación</p>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Nombre de usuario</label>
              <div className="control">
                <input
                  className={`${styles['border-outline']} is-success input`}
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ color: 'white' }}
                />
              </div>
            </div>
            <div className="field mb-6">
              <label className="label">Contraseña</label>
              <div className="control">
                <input
                  className={`${styles['border-outline']} is-success input`}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ color: 'white' }}
                />
              </div>
            </div>
            <div className="field has-addons has-addons-right">
              <div className="control">
                <button className="button is-primary is-outlined" type="submit">
                  Iniciar Sesion
                </button>
              </div>
            </div>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
