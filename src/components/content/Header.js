import SvgCvIcon from "../../generatedIcons/CvIcon";
import SvgGithubIcon from "../../generatedIcons/GithubIcon";
import SvgLinkedInIcon from "../../generatedIcons/LinkedInIcon";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="/assets/AvatarLiorKoren.jpg" alt="lior koren avatar" />
            <div className={classes.details}>
                <h1>Lior Koren</h1>
                <h2>Full Stack Developer</h2>
                <h2>Based in Kiryat Ono, Israel</h2>
            </div>
            <div className={classes.links}>
                <a href="/">
                    <SvgLinkedInIcon />
                </a>
                <a href="/">
                    <SvgGithubIcon />
                </a>
                <a href="/">
                    <SvgCvIcon />
                </a>
            </div>
        </header>
    );
};

export default Header;
