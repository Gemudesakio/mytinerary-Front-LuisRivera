
import SearchBar from "../components/SearchBar"
import CityCard from "../components/CityCard"
import { useState } from "react";
export default function Cities({cities}){
 console.log(cities);
 const [search, setSearch] = useState(""

 )

 function handleSearch (e){
    setSearch(e.target.value)
 }
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
        <SearchBar handleSearch = {handleSearch}></SearchBar>
        </section>
        <section className="flex flex-wrap gap-8 justify-center">
        {cities.map(city=>(
            <CityCard
            key={city._id}
            city={city}  
            search = {search}          
            ></CityCard>
        ))}
        

        </section>
    </main>
    
    </>
)
}