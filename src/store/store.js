import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/cityReducer";
import itineraryReducer from "./reducers/itineraryReducer";    
import { authReducer } from "./reducers/authReducewr"; 
import { registerReducer } from "./reducers/registerReducer";
const store = configureStore({
    reducer:{
        city: cityReducer,
        itinerary: itineraryReducer,
        auth: authReducer,
        register: registerReducer
    }
})

export default store;