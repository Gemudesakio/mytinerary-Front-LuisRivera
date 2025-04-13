import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getItineraries } from "../store/actions/itineraryActions"
import { FaHeart } from "react-icons/fa"

export default function ItineraryCard({ cityId }) {
    console.log("entrando a la peticion ");
    console.log("cityId desde itinerary: ", cityId);

    const dispatch = useDispatch();
    const itineraries = useSelector((state) => state.itinerary.itineraries);

    useEffect(() => {
            dispatch(getItineraries(cityId));
    }, [dispatch,cityId]);

    console.log(itineraries[0]);

    return (
        <>
            <h1 className="text-center text-3xl font-bold my-7">ITINERARIES</h1>
            <div className="flex flex-wrap justify-center gap-8 mx-4">
                {itineraries.map((itinerary) => (
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
                    </div>
                ))}
            </div>
        </>
    );
}
