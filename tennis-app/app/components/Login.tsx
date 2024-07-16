import { useState } from 'react';
import { logIn } from '../firebase/authFunctions';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const user = await logIn(email, password);
        console.log('Logged in user:', user);
      } catch (error) {
        console.error('Login error:', error);
      }
    };
  
    return (
      <form onSubmit={handleLogin} className="max-w-md mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 w-full rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
        Login
      </button>
    </form>
    );
  };
  
  export default Login;