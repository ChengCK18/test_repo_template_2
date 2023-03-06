const NavItem = ({ text, textLink, userDevice }) => {
    let layout = "";
    if (userDevice === "laptop" || userDevice === "tablet") {
        layout = (
            <div
                className={`font-neueHaas font-semibold tracking-widest text-white laptop:text-[1.9vh]`}
            >
                <a href={`#${textLink}`}>{text}</a>
            </div>
        );
    } else {
        layout = (
            <div
                className={`mt-6 font-anton text-[36px] text-custom-theme-purple`}
            >
                <a href={`#${textLink}`}>{text}</a>
            </div>
        );
    }

    return layout;
};

export default NavItem;
