import NavBar from "./components/NavBar";
import AboutIntro from "./components/AboutIntro";
const App = () => {
  return (
    <div className="flex w-screen max-w-full flex-col">
      {/* <NavBar /> */}

      <div className="relative h-screen w-full justify-center bg-blue-200 text-center">
        <div className="absolute top-[24%] w-full bg-white bg-opacity-0 text-center font-anton font-normal tracking-wider text-custom-theme-purple mobile:px-20 mobile:text-6xl laptop:text-[9.375rem]">
          HOME TO ALL.
        </div>
      </div>
      <AboutIntro />
    </div>
  );
};

export default App;
