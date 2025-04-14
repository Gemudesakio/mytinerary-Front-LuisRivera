import { createReducer } from "@reduxjs/toolkit";
import { getItineraries } from "../actions/itineraryActions";
import { StatusHttp } from "./cityReducer";



const initialState = {
    itineraries: [],
    status: StatusHttp.IDLE,
    error: null,
};

const itineraryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getItineraries.fulfilled, (state, action) => {
            state.itineraries = action.payload.Itineraries;
            state.status = StatusHttp.SUCCEDED;
        })
        .addCase(getItineraries.pending, (state) => {
            state.status = StatusHttp.PENDING;
        })
        .addCase(getItineraries.rejected, (state, action) => {
            state.status = StatusHttp.FAILED;
            state.error = action.error.message;
        });
});

export default itineraryReducer;

