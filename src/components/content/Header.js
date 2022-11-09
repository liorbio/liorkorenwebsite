import SvgCvIcon from "../../generatedIcons/CvIcon";
import SvgGithubIcon from "../../generatedIcons/GithubIcon";
import SvgLinkedInIcon from "../../generatedIcons/LinkedInIcon";
import classes from "./Header.module.css";
import Pdf from "../../CV-LiorKoren.pdf";

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
                <a href="https://www.linkedin.com/in/liorkorenbio/" target="_blank" rel="noopener noreferrer">
                    <SvgLinkedInIcon />
                </a>
                <a href="https://github.com/liorbio" target="_blank" rel="noopener noreferrer">
                    <SvgGithubIcon />
                </a>
                <a href={Pdf} target="_blank" rel="noreferrer">
                    <SvgCvIcon />
                </a>
            </div>
        </header>
    );
};

export default Header;
