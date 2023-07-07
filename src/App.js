import { useSelector } from "react-redux"
import "./App.css";
import { selectDisplay } from "./redux/slices/displayCountrySlice"
import { selectPotentials } from "./redux/slices/potentialCountriesSlice"
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";

function App() {
    let currentDisplay = useSelector(selectDisplay)
    let potentials = useSelector(selectPotentials)
    console.log(currentDisplay)
    console.log(potentials)
    return (
        <div className="App font-link">
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;
