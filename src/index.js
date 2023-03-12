import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const MusicContext = React.createContext();
let bgAudioMusic = new Audio();

root.render(
    <React.StrictMode>
        <MusicContext.Provider value={bgAudioMusic}>
            <App />
        </MusicContext.Provider>
    </React.StrictMode>
);
