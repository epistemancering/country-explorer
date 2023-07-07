import React from "react";
import { useSelector } from "react-redux"
import { selectDisplay } from "../redux/slices/displayCountrySlice"
let borders
const Overview = () => {
    let currentDisplay = useSelector(selectDisplay)
    if (currentDisplay.borders) {
        borders = currentDisplay.borders.join(", ")
    } else {
        borders = "N/A"
    }
    let capitals = []
    for (let index in currentDisplay.capital) {
        capitals.push(<td key = {index}>
            {currentDisplay.capital[index]}
        </td>)
    }
    return <div className = {"stack"}>
        <h1>
            {currentDisplay.name.official}
        </h1>
        <h2>
            {currentDisplay.name.common}
        </h2>
        <table className = {"overview-table"}>
            <tbody>
                <tr>
                    <td>
                        Borders:
                    </td>
                    <td>
                        {borders}
                    </td>
                </tr>
                <tr>
                    <td>
                        Capital:
                    </td>
                    {capitals}
                </tr>
                <tr>
                    <td>
                        Population:
                    </td>
                    <td>
                        {currentDisplay.population}
                    </td>
                </tr>
                <tr>
                    <td>
                        Continent:
                    </td>
                    <td>
                        {currentDisplay.continents[0]}
                    </td>
                </tr>
                <tr>
                    <td>
                        Independent:
                    </td>
                    <td>
                        {String(currentDisplay.independent)}
                    </td>
                </tr>
                <tr>
                    <td>
                        Landlocked:
                    </td>
                    <td>
                        {String(currentDisplay.landlocked)}
                    </td>
                </tr>
                <tr>
                    <td>
                        Member of UN:
                    </td>
                    <td>
                        {String(currentDisplay.unMember)}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>;
};

export default Overview;
