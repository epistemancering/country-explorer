import { createSlice } from "@reduxjs/toolkit"
export const potentialCountriesSlice = createSlice({
    "name": "potentialCountries",
    "initialState": {
        "value": [{
            "name": { "common": "America" }
        }]
    },
    "reducers": {
        "setPotentialCountries": function(state, action) {
            state.value = action.payload
        },
        "deletePotentialCountries": function(state) {
            state.value = null
        }
    }
})
export let { setPotentialCountries, deletePotentialCountries } = potentialCountriesSlice.actions
export const selectPotentials = function(state) {
    return state.potentialCountries.value
}
export default potentialCountriesSlice.reducer