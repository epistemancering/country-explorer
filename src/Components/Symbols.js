import { useSelector } from "react-redux"
import { selectDisplay } from "../redux/slices/displayCountrySlice"
export default function Symbols() {
    let currentDisplay = useSelector(selectDisplay)
    return <div className = {"symbols"}>
        <div className = {"stack"}>
            <img src = {currentDisplay.flags.png} />
        </div>
        <div className = {"stack"}>
            <img src = {currentDisplay.coatOfArms.png} />
        </div>
    </div>
}