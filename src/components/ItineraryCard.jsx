import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getItineraries } from "../store/actions/itineraryActions"
import { FaHeart } from "react-icons/fa"
import { useState } from "react"

export default function ItineraryCard({ cityId }) {
    console.log("entrando a la peticion ");
    console.log("cityId desde itinerary: ", cityId);
    const dispatch = useDispatch();
    const itineraries = useSelector((state) => state.itinerary.itineraries);
   

    useEffect(() => {
        if( itineraries.map(itinerary => itinerary.city._id).includes(cityId)) return;
            dispatch(getItineraries(cityId));
        
    }, [dispatch,cityId]);

    console.log(itineraries[0]);
    if(itineraries.length === 0) {
        return (
            <>
            <h1 className="text-center text-3xl font-bold my-7">ITINERARIES</h1>
            <div className="flex flex-col justify-center items-center  text-center px-4">
                <div className="text-6xl mb-4 animate-bounce text-yellow-400">🚧</div>
                <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-2">
                    No itineraries available yet!
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 max-w-md">
                    It seems there are no itineraries created for this city yet. 
                    We are working hard behind the scenes to bring you exciting activities and experiences soon.
                </p>
            <p className="mt-4 text-sm italic text-neutral-500 dark:text-neutral-400 animate-pulse">
                (Content under construction, check back later 🚀)
            </p>
            </div>

            </>
        );
    }
    return (
        <>
            <h1 className="text-center text-3xl font-bold my-7">ITINERARIES</h1>
            <div className="flex flex-wrap justify-center gap-8 mx-4">
                {itineraries.map((itinerary) => {
                    
                    return (
                        <div key={itinerary._id} className="relative overflow-hidden w-[min(100%,34rem)] border bg-slate-50 dark:bg-black dark:border dark:border-slate-700 rounded-lg shadow-xl mb-5">
                        <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-lg flex items-center gap-2">
                            <FaHeart className="text-white" />
                            <span className="text-white text-lg">{itinerary.likes}</span>
                        </div>
                        <img src={itinerary.photo} alt={itinerary.title} className="w-full object-cover" />
                        <div className="flex p-4 pb-2 gap-4">
                            <div className="flex flex-col items-center min-w-[5rem]">
                                <img src={itinerary.user.photo} alt={itinerary.user.name} className="rounded-full w-14 sm:w-20 object-cover shadow-md" />
                                <p className="font-light">created by</p>
                                <p className="font-black text-center">{itinerary.user.name}</p>
                            </div>
                            <div>
                                <h1 className="font-bold text-lg">{itinerary.title}</h1>
                                <div className="flex justify-between">
                                    <p>💵 ${itinerary.price}</p>
                                    <p>⏲ {itinerary.duration}</p>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {itinerary.hashtags.map((hashtag, index) => (
                                    <span
                                    key={index}
                                    className="border border-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full bg-black shadow-[0_0_10px_2px_rgba(59,130,246,0.8)]"
                                    >
                                    {hashtag}
                                    </span>
                                    
                                    ))}
                                </div>

                            </div>
                        </div>
                        <ActionsItineraryCard itinerary={itinerary} />
                    </div>
                    )
        })}
            </div>
        </>
    );
}


//se ceparan las acciones para no crear renderizados innecesarios en el componente padre por cambiios en el estado
function ActionsItineraryCard({itinerary}) {
   
    const [openItineraryId, setOpenItineraryId] = useState(null);
    const toggleOpen = (id) => {
        setOpenItineraryId(prevId => prevId === id ? null : id);
    };

    const isOpen = openItineraryId === itinerary._id;
    return(
        <>
        
         <button 
            onClick={() => toggleOpen(itinerary._id)} 
            className="text-center w-full transition-all duration-300 ease-in-out text-2xl"
        >
            {isOpen ? '▲' : '▼'}
        </button>

            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out 
                ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} 
                bg-slate-50 dark:bg-black 
                rounded-lg shadow-xl mb-5`}
                        >
            <h2 className="font-bold text-lg mt-4 text-center w-full">ACTIVITIES</h2>

            <div className="flex justify-center items-center gap-3 py-4">
                <span className="text-yellow-500 font-mono animate-pulse text-center">
                    🚧 Under Construction 🚧
                    </span>
                </div>
            </div>
        </>
    )
}
