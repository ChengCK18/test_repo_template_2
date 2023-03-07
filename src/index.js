import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
let bgAudioMusic = new Audio();
root.render(
    <React.StrictMode>
        <App bgAudioMusic={bgAudioMusic} />
    </React.StrictMode>
);
