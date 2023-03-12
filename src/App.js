import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import IntroPage from "./components/IntroPage";
import ModuleIntroPage from "./components/ModuleIntroPage";
import BlackBgWithImg from "./components/BlackBgWithImg";
import HeaderText from "./components/HeaderText";

const App = () => {
    const [userDevice, setUserDevice] = useState("laptop");

    useEffect(() => {
        let screenWidth = window.innerWidth;

        if (screenWidth < 540) {
            setUserDevice("mobile");
        } else if (screenWidth < 821) {
            setUserDevice("tablet");
        } else {
            setUserDevice("laptop");
        }
        window.addEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        let screenWidth = window.innerWidth;
        if (screenWidth < 640) {
            setUserDevice("mobile");
        } else if (screenWidth < 821) {
            setUserDevice("tablet");
        } else {
            setUserDevice("laptop");
        }
    };

    console.log("here", userDevice);

    return (
        <div className="scroll-smooth">
            <NavBar userDevice={userDevice} />
            <LandingPage userDevice={userDevice} />
            <IntroPage userDevice={userDevice} />
            <ModuleIntroPage userDevice={userDevice} />
            <BlackBgWithImg
                userDevice={userDevice}
                imgPath={"10_Gallery.png"}
                divId={"section-gallery"}
            />
            <HeaderText userDevice={userDevice} imgPath={"11_Experience.png"} />
            <BlackBgWithImg
                userDevice={userDevice}
                imgPath={"12_Team.png"}
                divId={"section-team"}
            />
            <HeaderText userDevice={userDevice} imgPath={"13_Unlock.png"} />
        </div>
    );
};

export default App;

// <AboutIntro />
