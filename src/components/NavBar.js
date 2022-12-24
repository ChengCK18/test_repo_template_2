import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-grow justify-center bg-black h-[5.5%] ">
        <div className="font-anton text-5xl text-white">LAZYNAIRE</div>
      </div>

      <div className="flex flex-row flex-grow items-center space-x-16 justify-center bg-custom-theme-purple h-[5.5%]">
        <NavItem text={"HOME"} textLink={"#"} />
        <NavItem text={"EXPLORE"} textLink={"#"} />
        <NavItem text={"CORE"} textLink={"#"} />
        <NavItem text={"ROADMAP"} textLink={"#"} />
        <NavItem text={"TEAM"} textLink={"#"} />
        <NavItem text={"FAQ"} textLink={"#"} />
        <NavItem text={"MINT"} textLink={"#"} />
      </div>
    </div>
  );
};

export default NavBar;
