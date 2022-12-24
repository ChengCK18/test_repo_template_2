import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="flex w-screen max-w-full flex-col">
      <NavBar />

      <div className="relative h-screen w-full justify-center text-center">
        <div className="absolute top-[24%] w-full bg-white bg-opacity-0 text-center font-anton text-[9.375rem] font-normal text-custom-theme-purple">
          HOME TO ALL.
        </div>
      </div>
      <div className="h-screen w-full">
        <h1 className="h-screen bg-green-600 text-5xl">green</h1>
      </div>
    </div>
  );
};

export default App;
