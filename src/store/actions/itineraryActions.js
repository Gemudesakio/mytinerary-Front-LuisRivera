import {createAsyncThunk} from '@reduxjs/toolkit';

const getItineraries = createAsyncThunk("itinerary/getItineraries", async (cityId) => {
    const response = await fetch(`http://localhost:8080/api/itineraries/city/${cityId}`);
    const data = await response.json();
    return data;
})

export {getItineraries};
