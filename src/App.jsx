
import Home from './pages/Home'
import Cities from './pages/Cities'
import StandardLayout from './layouts/Standart'
import CityDetails from './components/CityDetails'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' //importamos dos hooks, el primero es la envoltura y el segundo es que establece las rutas
function App() {
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
          element: <Cities  ></Cities>
        },
        {
          path:"/cityDetail",
          element: <CityDetails></CityDetails>
        }
      ]
    },
  ]
)



  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App
