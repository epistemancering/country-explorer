import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux"
import App from "./App";
import "./index.css";
import store from "./redux/store"
function Modal() {
    let display
    if (!useSelector(function(state) {
        return state.loading.value
    })) {
        display = "none"
    }
    return <div style = {{ "display": display, "position": "absolute", "height": "100vh", "width": "100%", "backgroundColor": "white" }}>
        loading
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store = {store.store}>
            <Modal />
            <App />
        </Provider>
    </React.StrictMode>
);
