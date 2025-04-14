
import SearchBar from "../components/SearchBar"
import CityCard from "../components/CityCard"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCities } from "../store/actions/cityActions"
import { useSelector } from "react-redux"
import { StatusHttp } from "../store/reducers/cityReducer"

export default function Cities(){
    const status = useSelector((state)=>state.city.statusCities.status)
    const Ascending = useSelector((state) => state.city.ascending)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(status == StatusHttp.IDLE) {
        dispatch(getCities())
        }
    },[dispatch, status])

    const dataFinal = useSelector((state)=>state.city.statusCities.cities)

   //tratamos la data (ordenar y eliinar duplicados)
  const cities = dataFinal ? [...new Map(dataFinal.map(item=> [item.name, item])).values()]
  .sort((a, b) => 
    Ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  )
  :[]


    
    
return(

    <>
    <div className="relative top-0 overflow-hidden w-full bg-black">
    <img className="h-[50vh] absolute w-full object-cover object-center brightness-[.65] shadow-lg" src="https://mytinerary-mern.vercel.app/img/cities.jpg" alt="fondo" />
    <section className="relative z-10 h-[50vh] flex flex-col justify-center text-center text-amber-50">
        <div className="max-w-[1291px] m-auto p-3">
            <h1 className="text-4xl font-bold mb-4">Cities</h1>
            <p className="text-2xl max-w-sm">Collection of the most beatiful places and experience</p>
        </div>
    </section>
    </div>
    <main className=" bg-black max-w-full px-4 pb-8">
    <section className="flex justify-center items-center">
        <SearchBar></SearchBar>
        </section>
        <section className="flex flex-wrap gap-8 justify-center">
        {cities.map(city=>(
            <CityCard
            key={city._id}
            city={city}         
            ></CityCard>
        ))}
        

        </section>
    </main>
    
    </>
)
}