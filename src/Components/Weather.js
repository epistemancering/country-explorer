import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import store from "../redux/store"
import { selectDisplay } from "../redux/slices/displayCountrySlice"
const Weather = () => {
    let display = useSelector(selectDisplay)
    const [weather, setWeather] = useState();
    let latitude = display.capitalInfo.latlng[0]
    let longitude = display.capitalInfo.latlng[1]
    // ------------------------------------
    // PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
    // ------------------------------------
    useEffect(function() {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: `${latitude},${longitude}`},
            headers: {
                'X-RapidAPI-Key': '006ae3e53emsh38bf4b7d3ebc053p17601djsna74a0c7dc0d4',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            dispatch(store.loading(true))
            axios.request(options).then(function(response) {
                console.log(response.data);
                setWeather(response.data)
                dispatch(store.loading(false))
            })
        } catch (error) {
            console.error(error);
        }
    }, [])
    let dispatch = useDispatch()
    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: {weather?.current.condition.text}</td>
                </tr>
                <tr>
                    <td>Temperature: {weather?.current.temp_c}</td>
                </tr>
                <tr>
                    <td>Feels Like: {weather?.current.feelslike_c}</td>
                </tr>
                <tr>
                    <td>Humidity: {weather?.current.humidity}</td>
                </tr>
                <tr>
                    <td>Wind Speed: {weather?.current.wind_kph}</td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
