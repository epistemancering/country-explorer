import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { BsFillFlagFill } from "react-icons/bs";
import store from "../redux/store"
import { selectDisplay, deleteDisplayCountry } from "../redux/slices/displayCountrySlice"
import { setPotentialCountries, deletePotentialCountries } from "../redux/slices/potentialCountriesSlice"
const Header = () => {
    let currentDisplay = useSelector(selectDisplay)
    const [input, setInput] = useState();
    let dispatch = useDispatch()
    return (
        <div className="header">
            <div className="home">
                <BsFillFlagFill
                    style={{ marginRight: "10px" }}
                    fontSize="1.6em"
                />
                <h3 className="home-country">
                    {currentDisplay && currentDisplay.name.common}
                </h3>
            </div>
            <div className="country-input">
                <input
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        dispatch(store.loading(true))
                        axios
                            .get(`https://restcountries.com/v3.1/name/${input}`)
                            .then((res) => {
                                console.log(res.data);
                                dispatch(deleteDisplayCountry())
                                dispatch(deletePotentialCountries())
                                dispatch(setPotentialCountries(res.data))
                                dispatch(store.loading(false))
                            })
                            .catch((err) => {
                                alert(
                                    "No countries found that match your search!"
                                );
                            });
                    }}
                >
                    search
                </button>
            </div>
        </div>
    );
};

export default Header;
