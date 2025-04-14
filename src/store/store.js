import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/cityReducer";
import itineraryReducer from "./reducers/itineraryReducer";     
const store = configureStore({
    reducer:{
        city: cityReducer,
        itinerary: itineraryReducer
    }
})

export default store;