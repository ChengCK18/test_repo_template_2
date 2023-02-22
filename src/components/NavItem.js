const NavItem = ({ text, textLink, userDevice }) => {

    let layout = ''
    if (userDevice === 'laptop' || userDevice === 'tablet') {
        layout = (
            <div className={`font-neueHaas font-semibold tracking-widest text-white laptop:text-[1.9vh]`}>
                <a href={`#${textLink}`}>{text}</a>
            </div>)
    } else {
        layout = (
            <div className={`font-anton text-custom-theme-purple text-[36px] mt-6`}>
                <a href={`#${textLink}`}>{text}</a>
            </div>)

    }

    return (
        layout
    );
};

export default NavItem;
