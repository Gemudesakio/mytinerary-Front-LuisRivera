import { MapPin } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from "react-redux";


export default function CityCard({ city}) {
    const search = useSelector((state) => state.city.search)
    const backupImage = "https://us.123rf.com/450wm/irstone/irstone1411/irstone141100244/33898295-fondo-de-la-ciudad-hecha-de-siluetas-de-construcci%C3%B3n.jpg?ver=6"; // Imagen de respaldo
    const [imageSrc, setImageSrc] = useState(city.photo); // Estado para la imagen
    const display = city.name.toLowerCase().trim().includes(search.toLowerCase().trim()) || city.country.toLowerCase().trim().includes(search.toLowerCase().trim())
    ?""
    :"hidden"
    return (
        <div className={`rounded-lg shadow-lg relative flex overflow-hidden w-96 h-60 ${display}`}>
            {/* Imagen de fondo con validación */}
            <img 
                src={imageSrc} 
                alt={city.name}
                className="w-full h-full object-cover absolute inset-0 brightness-75"
                onError={() => setImageSrc(backupImage)} // Si hay error, cambia a la imagen de respaldo
            />

            {/* Contenedor de información */}
            <div className="relative flex flex-col w-full justify-between p-4 text-neutral-100">
                {/* Título y ubicación */}
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">{city.name}</h1>
                    <h2 className="text-xl">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-white" /> {city.country}
                        </div>
                    </h2>
                </div>

                {/* Botón interactivo */}
                <Link 
                to={`/cityDetail`} 
                className="md:w-[60%]"
                state={{ city }} >
                <button className="bg-blue-700 text-white font-bold rounded-lg p-3 text-center w-full hover:bg-blue-600 active:scale-95 transition-all shadow-lg">
                    View More
                </button>
                </Link>
            </div>
        </div>
    );
}

