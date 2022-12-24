const NavItem = ({ text, textLink }) => {
  return (
    <div className="font-neueHaas font-semibold text-xl  text-white  ">
      <a href={textLink}>{text}</a>
    </div>
  );
};

export default NavItem;
