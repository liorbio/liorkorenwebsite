import { useState } from "react";
import classes from "./Projects.module.css";

const Project = ({ children, appIconUrl, githubLink }) => {
    const [active, setActive] = useState(false);

    const makeActive = () => setActive(true);
    const makeInactive = () => setActive(false);
    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className={classes.project} onMouseEnter={makeActive} onMouseLeave={makeInactive} onClick={() => openLink(githubLink)}>
            {appIconUrl && <img style={{ filter: active ? "saturate(100%)" : "" }} src={appIconUrl} alt="app icon" />}
            <p>{children}</p>
        </div>
    );
};

const Projects = () => {
    return (
        <>
            <h1 className={classes.heading}>Projects</h1>
            <div className={classes.projectsWrapper}>
                <Project appIconUrl="/assets/LanguCardsIcon.jpg" githubLink="https://github.com/liorbio/LanguCards">
                    <b>LanguCards</b> - A web application based on a MERN stack dedicated for language learners to store their vocabulary, fetch it
                    easily and organize it. This tool can help advance you toward your language learning feats.
                </Project>
                <Project appIconUrl="/assets/hanarefIcon.jpg" githubLink="https://github.com/liorbio/hanaref">
                    <b>hanaref</b> - A web application based on a MERN stack created for the IDF. It provides a platform for storing and searching
                    details about medical devices used in the army so as to facilitate the process of medical device procurement.
                </Project>
                <Project appIconUrl="/assets/IDFChampIcon.jpg" githubLink="https://github.com/liorbio/IDF-champ-in-med">
                    <b>IDF-champ-in-med</b> - A web application based on a MERN stack for the annual IDF championship in medicine. It substitutes
                    manual exams with a fun interface, facilitating workflow during the competition while automatically calculating competitors’
                    grades.
                </Project>
                <Project></Project>
            </div>
        </>
    );
};

export default Projects;
