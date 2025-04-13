import { createReducer } from "@reduxjs/toolkit"
import { search, ascending, getCities } from "../actions/cityActions"

export const StatusHttp = {
    PENDING: 'pending',
    IDLE: 'idle',
    SUCCEDED: 'succeded',
    FAILED: 'failed'
}

const statusCities = {
    cities: [],
    status: StatusHttp.IDLE,
    error: null,
}
const initialState = {
    statusCities: statusCities,
    search: "",
    ascending: true,
}

const cityReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(search, (state, action) => {
            state.search = action.payload
        })
        .addCase(ascending, (state) => {
            state.ascending = !state.ascending
        })
        .addCase(getCities.fulfilled, (state, action) => {
            state.statusCities.cities = action.payload.Cities
            state.statusCities.status = StatusHttp.SUCCEDED
        })
        .addCase(getCities.pending, (state) => {
            state.statusCities.status = StatusHttp.PENDING
        })
        .addCase(getCities.rejected, (state, action) => {
            state.statusCities.status = StatusHttp.FAILED
            state.statusCities.error = action.error.message
        })

     
})

export default cityReducer