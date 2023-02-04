import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import AboutIntro from "./components/AboutIntro";

const App = () => {
  const [userDevice, setUserDevice] = useState("laptop");

  useEffect(() => {
    let screenWidth = window.innerWidth;

    if (screenWidth < 640) {
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

  console.log(userDevice);

  return (
    <>
      <NavBar userDevice={userDevice} />
      <LandingPage userDevice={userDevice} />

      <AboutIntro />
    </>
  );
};

export default App;
