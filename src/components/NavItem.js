import { Link } from "react-router-dom";

const NavItem = ({ text, textLink, userDevice }) => {
    let layout = "";
    let mintGrayed = "";
    if (text === "MINT" && userDevice === "laptop") {
        mintGrayed = "opacity-50";
        layout = (
            <div
                className={`font-neueHaas font-semibold tracking-widest text-white laptop:text-[1.9vh]`}
            >
                <Link to="/mint">MINT</Link>
            </div>
        );
        return layout;
    }
    if (userDevice === "laptop" || userDevice === "tablet") {
        layout = (
            <div
                className={`font-neueHaas font-semibold tracking-widest text-white laptop:text-[1.9vh] ${mintGrayed}`}
            >
                <a href={`#${textLink}`}>{text}</a>
            </div>
        );
    } else {
        layout = (
            <div
                className={`mt-6 font-anton text-[36px] text-custom-theme-purple ${mintGrayed}`}
            >
                <a href={`#${textLink}`}>{text}</a>
            </div>
        );
    }

    return layout;
};

export default NavItem;
