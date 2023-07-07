import { createSlice } from "@reduxjs/toolkit"
import initialCountry from "../../assets/initialCountry"
export const displayCountrySlice = createSlice({
    "name": "displayCountry",
    "initialState": { "value": initialCountry },
    "reducers": {
        "setDisplayCountry": function(state, action) {
            state.value = action.payload
        },
        "deleteDisplayCountry": function(state) {
            state.value = null
        }
    }
})
export let { setDisplayCountry, deleteDisplayCountry } = displayCountrySlice.actions
export const selectDisplay = function(state) {
    return state.displayedCountry.value
}
export default displayCountrySlice.reducer