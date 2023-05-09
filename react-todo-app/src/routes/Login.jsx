import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import styles from '@/styles/Login.module.css';
import { useAuthContext } from '@/context/AuthContext';
const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || '/';
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    login(username);
    navigate('/',  { replace: true });
    navigate(from, { replace: true });
  };
  return (
    <div>
      <h1>Login</h1>
      <div >
        <form  onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
