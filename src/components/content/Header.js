import SvgCvIcon from "../../generatedIcons/CvIcon";
import SvgGithubIcon from "../../generatedIcons/GithubIcon";
import SvgLinkedInIcon from "../../generatedIcons/LinkedInIcon";
import classes from "./Header.module.css";
import Pdf from "../../CV-LiorKoren.pdf";
import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";

const miniHeaderOpacities = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

const MiniHeader = ({ upon }) => {
    const nodeRef = useRef(null);
    return (
        <Transition nodeRef={nodeRef} in={upon} timeout={0}>
            {(state) => (
                <div
                    ref={nodeRef}
                    className={classes.topBar}
                    style={miniHeaderOpacities[state]}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <img src="/assets/AvatarLiorKoren.jpg" alt="lior koren avatar" />
                    <h1>Lior Koren</h1>
                </div>
            )}
        </Transition>
    );
};

const Header = () => {
    const [scrolledDown, setScrolledDown] = useState(false);
    const [reload, setReload] = useState(false);
    const isMobile = window.innerWidth <= 700;

    console.log("RELOAD APPENED");

    useEffect(() => {
        const declareScrolledDown = () => {
            if (window.scrollY > window.innerHeight - 200) {
                setScrolledDown(true);
            } else {
                setScrolledDown(false);
            }
        };
        const forceReload = () => setReload((prev) => !prev);
        window.addEventListener("resize", forceReload);
        if (!isMobile) {
            window.removeEventListener("scroll", declareScrolledDown);
            setScrolledDown(false);
        } else {
            // if in Mobile Version:
            const headerChildren = [...document.getElementById("header").childNodes];
            const leftoverHeight = window.innerHeight - headerChildren.slice(1, 4).reduce((prev, curr) => prev + curr.clientHeight, 0);
            console.log(leftoverHeight);
            document.getElementById("mobileClicker").setAttribute("style", `height: calc(${leftoverHeight}px - 3rem)`);
            console.log(`H: ${document.getElementById("mobileClicker").clientHeight}`);
            window.addEventListener("scroll", declareScrolledDown);
            return () => {
                window.removeEventListener("scroll", declareScrolledDown);
            };
        }
        return () => {
            window.removeEventListener("resize", forceReload);
        };
    }, [isMobile]);

    return (
        <header className={classes.header} id="header">
            <MiniHeader upon={scrolledDown} />
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
            {isMobile && (
                <div id="mobileClicker" className={classes.mobileClicker}>
                    <h1 onClick={() => window.scrollTo({ top: window.innerHeight - 130, behavior: "smooth" })}>Bio</h1>
                    <h1
                        onClick={() =>
                            window.scrollTo({ top: window.innerHeight + document.getElementById("bio").clientHeight - 50, behavior: "smooth" })
                        }
                    >
                        Projects
                    </h1>
                </div>
            )}
        </header>
    );
};

export default Header;
