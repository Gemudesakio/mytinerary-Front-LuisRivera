import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  const location = useLocation();

  // 1) Si no hay token y no estás ya en la ruta de login → ve a /login
  if (!token && location.pathname !== "/SigIn") {
    return <Navigate to="/SigIn" replace />;
  }

  // 2) Si hay token y estás en /login → ve a /store
  if (token && location.pathname === "/SigIn") {
    return <Navigate to="/cities" replace />;
  }

  // 3) En cualquier otro caso (tienes token y no es /login,
  //    o no tienes token pero sí estás ya en /login)
  //    deja pasar a los children
  return children;
}

