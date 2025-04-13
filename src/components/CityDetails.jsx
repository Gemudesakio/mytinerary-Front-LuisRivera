import { useLocation } from 'react-router-dom';
import ItineraryCard from "./itineraryCard";


export default function CityDetails() {

 
const { state } = useLocation();
const { city } = state || {};


if (!city) {
    return <div className="text-center text-red-500 py-8">No city data available</div>;
}

return (
    <div className="min-h-screen bg-black text-amber-50 py-8 flex flex-col items-center">
      {/* Imagen de la ciudad */}
        <img 
        src={city.photo} 
        alt={city.name} 
        className="h-[50vh] w-full object-cover object-center brightness-[.65] shadow-lg"
    />

      {/* Contenedor de detalles */}
    <div className="max-w-4xl mt-8 px-4 ">
        <h1 className="text-5xl font-extrabold text-gray-400 mb-4 text-center hover:text-amber-50">
            {city.name}
        </h1>
        <h2 className="text-2xl text-gray-300 mb-6 text-center hover:text-amber-50">
        {city.country} {`- ${city.continent}`}
        </h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-6 text-justify hover:text-amber-50">
            {city.description}
        </p>
        <div className="flex flex-wrap justify-around text-gray-300 ">
            <div className="flex items-center gap-1 hover:text-amber-50">
            <span className="font-semibold ">Currency:</span> {city.currency}
                </div>
            <div className="flex items-center gap-1 hover:text-amber-50">
            <span className="font-semibold">Founded:</span> {city.yearFoundation}
                </div>
        <div className="flex items-center gap-1 hover:text-amber-50">
            <span className="font-semibold">Likes:</span> {city.likes}
                </div>
            </div>
            </div>
            {console.log("city id desde detrails: " + city._id)}
            
            <ItineraryCard cityId={city._id} />


        </div>
  );
}
