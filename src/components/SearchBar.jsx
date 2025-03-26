import { useState } from "react"
import { Search } from 'lucide-react';


export default function SearchBar({handleSearch,  handleAscending}){
    const [isAZ, setIsAZ] = useState(true)
    return(
        <div className="overflow-hidden flex justify-center my-8 shadow-md">
        <input 
            placeholder="🔍 Search your city" 
            type="search" 
            className="p-4 bg-gray-500 text-amber-50 rounded-l-lg w-[60vw] md:w-120" 
            onChange={(e)=>handleSearch(e)}
        />
        <button className="px-2 bg-green-500">
            <Search />
        </button>
        <button 
            onClick={()=>{
                setIsAZ(!isAZ)
                handleAscending()
            }} 
            className="text-amber-50 font-black bg-[#2459D8] px-2 rounded-r-lg transition-all duration-300 ease-in-out"
        >
            {isAZ ? " A->Z" : " Z->A"}
        </button>
        </div>
    )
}
