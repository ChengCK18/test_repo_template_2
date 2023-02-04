const NavItem = ({ text, textLink, userDevice }) => {
  return (
    <div
      className={` font-neueHaas font-semibold tracking-widest text-white ${
        userDevice === "laptop" ? "text-[1.9vh]" : ""
      } ${userDevice === "tablet" ? "text-[2.4vh]" : ""}  `}
    >
      <a href={textLink}>{text}</a>
    </div>
  );
};

export default NavItem;
