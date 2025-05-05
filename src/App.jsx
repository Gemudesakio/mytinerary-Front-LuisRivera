
import Home from './pages/Home'
import Cities from './pages/Cities'
import StandardLayout from './layouts/Standart'
import CityDetails from './components/CityDetails'
import SigIn from './components/SigIn'
import SigUp from "./components/SigUp"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './store/actions/authAction'
import axios from 'axios'
import PrivateRoute from './components/PrivateRoutes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' //importamos dos hooks, el primero es la envoltura y el segundo es que establece las rutas

  //creamos un router que contendra un vector de objetos, cada objeto es una pagina en especial
  //en el objeto se debera espesificar la ruta y el componente que se desea mostrar
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <StandardLayout></StandardLayout>,
      children: [
        {
          path:"",
          element: <Home></Home>
        },
        {
          path:"/cities",

          element:<PrivateRoute> <Cities/> </PrivateRoute>
        },
        {
          path:"/cityDetail",
          element: <PrivateRoute><CityDetails/></PrivateRoute>
        },
        {
          path:"/SigIn",
          element: <PrivateRoute> <SigIn/></PrivateRoute>
        },
        {
          path:"/SigUp",
          element:  <SigUp/>
        }
      ]
    },
  ]
)
const loginWithToken = async (token) => {
  try {
    const response = await axios.get('http://localhost:8080/api/auth/validateToken',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  } catch (error) {
    console.error("Error validating token:", error);
    return null;
  }
 }

function App() {

  const dispatch = useDispatch();

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    loginWithToken(token).then((user) => {
    const authTemp = {user,token}
    dispatch(setUser(authTemp));
    });
  } else {
    console.log("No token found in local storage.");
  }
},[dispatch]);

  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App
