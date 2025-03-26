
import Home from './pages/Home'
import Cities from './pages/Cities'
import StandardLayout from './layouts/Standart'
import CityDetails from './components/CityDetails'
import { useEffect, useState } from 'react'

async function fetchBack(url, setData){
  try {
    const response = await fetch(url)
    const data = await response.json()

    setData(data)
  } catch (error) {
    console.log("error fetching API", error);
    
  }
}


//importamos dos hooks, el primero es la envoltura y el segundo es que establece las rutas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  
  const [isAscending, setIsAscending] = useState(true)
  const [info,setData] = useState([])
  useEffect(()=>{
    fetchBack('http://localhost:8080/api/cities/all',setData)
  },[])

  function handleAscending() {
    setIsAscending(prev => !prev);
}

  const dataFinal = info && info.Cities ? info.Cities : [];


  //tratamos la data (ordenar y eliinar duplicados)
  const data = dataFinal ? [...new Map(dataFinal.map(item=> [item.name, item])).values()]
  .sort((a, b) => 
    isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  )
  :[]

  
  
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
          element: <Cities cities ={data}  handleAscending={ handleAscending}></Cities>
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
