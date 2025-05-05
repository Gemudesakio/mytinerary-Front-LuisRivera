import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {login} from "../store/actions/authAction"
export default function SigIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const dispatch = useDispatch();
 const authStore = useSelector((state) => state.auth);
 const { status, error } = authStore;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se inicia la sesion de usuario");
    
    dispatch(login({ email, password }));
    
    // Aquí puedes agregar la lógica para autenticar al usuario
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('https://mytinerary-mern.vercel.app/img/login.jpg')` }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold">Sign in</h2>
          <p className="text-sm text-gray-500">
            New user?{' '}
            <NavLink to="/SigUp" className="text-blue-600 hover:underline">
              Create an account
            </NavLink>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Continue
          </button>
          {status === "pending" && <p>Iniciando sesión...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <div className="mt-6 flex items-center">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="mx-3 text-sm text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>
        <button
          type="button"
          className="mt-6 w-full py-2 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            {/* Google icon here */}
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
}
