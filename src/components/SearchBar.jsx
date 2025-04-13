
import { Search } from 'lucide-react';
import { useDispatch } from "react-redux";
import { search, ascending } from "../store/actions/cityActions";
import { useSelector } from 'react-redux';


export default function SearchBar(){
    const dispatch = useDispatch()
    const isAZ = useSelector((state)=>state.city.ascending)
    return(
        <div className="overflow-hidden flex justify-center my-8 shadow-md">
        <input 
            placeholder="🔍 Search your city" 
            type="search" 
            className="p-4 bg-gray-500 text-amber-50 rounded-l-lg w-[60vw] md:w-120" 
            onChange={(e)=>dispatch(search(e.target.value))}    
        />
        <button className="px-2 bg-green-500">
            <Search />
        </button>
        <button 
            onClick={()=>{
                dispatch(ascending())
            }} 
            className="text-amber-50 font-black bg-[#2459D8] px-2 rounded-r-lg transition-all duration-300 ease-in-out"
        >
            {isAZ ? " A->Z" : " Z->A"}
        </button>
        </div>
    )
}
