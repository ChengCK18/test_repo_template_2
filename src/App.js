import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import MintPage from "./components/MintPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/mintssssssssssssssssssssssssssss"
                    element={<MintPage />}
                />
            </Routes>
        </Router>
    );
};

export default App;

// <AboutIntro />
