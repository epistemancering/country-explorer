import { createSlice, configureStore } from "@reduxjs/toolkit"
import displayedCountryReducer from "./slices/displayCountrySlice"
import potentialCountriesReducer from "./slices/potentialCountriesSlice"
let loading = createSlice({
    "name": "loading",
    "initialState": { "value": false },
    "reducers": {
        "loading": function(state, input) {
            state.value = input.payload
        }
    }
})
let store = {
    "store": configureStore({
        "reducer": {
            "loading": loading.reducer,
            "displayedCountry": displayedCountryReducer,
            "potentialCountries": potentialCountriesReducer
        }
    }),
    "loading": loading.actions.loading
}
export default store