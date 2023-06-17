import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import IntroPage from "./IntroPage";
import ModuleIntroPage from "./ModuleIntroPage";
import BlackBgWithImg from "./BlackBgWithImg";
import HeaderText from "./HeaderText";
import LoadingPage from "./LoadingPage";
import MintPage from "./MintPage";

const Home = () => {
    const [userDevice, setUserDevice] = useState("laptop");
    const [loading, setLoading] = useState(true);

    let loadingStyle = "";
    if (loading) {
        loadingStyle = "h-screen overflow-hidden";
    }

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

    return (
        <div className="scroll-smooth">
            <div className={`${loadingStyle}`}>
                <NavBar userDevice={userDevice} />
                <LandingPage
                    userDevice={userDevice}
                    loading={loading}
                    setLoading={setLoading}
                />
                <IntroPage userDevice={userDevice} />
                <ModuleIntroPage userDevice={userDevice} />
                <BlackBgWithImg
                    userDevice={userDevice}
                    imgPath={"10_Gallery.png"}
                    divId={"section-gallery"}
                />
                <HeaderText
                    userDevice={userDevice}
                    imgPath={"11_Experience.png"}
                />
                <BlackBgWithImg
                    userDevice={userDevice}
                    imgPath={"12_Team.png"}
                    divId={"section-team"}
                />

                <HeaderText userDevice={userDevice} imgPath={"13_Unlock.png"} />
            </div>
            <LoadingPage loading={loading} />
        </div>
    );
};

export default Home;
