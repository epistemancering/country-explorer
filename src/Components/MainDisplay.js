import React, { useState } from "react";
import Overview from "./Overview"
import Weather from "./Weather"
import Symbols from "./Symbols"
const MainDisplay = () => {
    const [view, setView] = useState("Overview");
    return (
        <div className="stack">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => setView("Weather")}>
                    Current Weather at Capitol
                </button>
                <button onClick={() => setView("Symbols")}>Symbols</button>
            </div>
            {view === "Overview" ? <Overview /> : undefined}
            {view === "Weather" ? <Weather /> : undefined}
            {view === "Symbols" ? <Symbols /> : undefined}
        </div>
    );
};

export default MainDisplay;
