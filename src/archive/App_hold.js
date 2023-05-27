import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import MintPage from "./components/MintPage";

const App = () => {
    const { isConnected } = useAccount();
    console.log("isConnected => ", isConnected);
    return (
        <div>
            <MintPage />
        </div>
    );
};
export default App;
