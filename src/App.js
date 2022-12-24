import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <h1 className="">Hey</h1>
      <div className="h-screen w-screen">
        <div className="flex-grow bg-red-200 "> Guhh</div>
        <div className="flex-grow bg-red-200"> Guhh</div>
      </div>
    </div>
  );
};

export default App;
