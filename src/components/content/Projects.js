import classes from "./Projects.module.css";

const Project = ({ children, appIconUrl }) => {
    // hover-over state ==> make dulling filter disappear

    return (
        <div className={classes.project}>
            <div>
                {/*<div className={classes.dullingFilter}></div>*/}
                <img src={appIconUrl} alt="app icon" />
            </div>
            <p>{children}</p>
        </div>
    );
};

const Projects = () => {
    return (
        <>
            <h1 className={classes.heading}>Projects</h1>
            <div className={classes.projectsWrapper}>
                <Project appIconUrl="/assets/LanguCardsIcon.jpg">
                    <b>LanguCards</b> - A web application based on a MERN stack dedicated for language learners to store their vocabulary, fetch it
                    easily and organize it. This tool can help advance you toward your language learning feats.
                </Project>
                <Project appIconUrl="/assets/hanarefIcon.jpg">
                    <b>hanaref</b> - A web application based on a MERN stack created for the IDF. It provides a platform for storing and searching
                    details about medical devices used in the army so as to facilitate the process of medical device procurement.
                </Project>
                <Project appIconUrl="/assets/IDFChampIcon.jpg">
                    <b>IDF-champ-in-med</b> - A web application based on a MERN stack for the annual IDF championship in medicine. It substitutes
                    manual exams with a fun interface, facilitating workflow during the competition while automatically calculating competitors’
                    grades.
                </Project>
            </div>
        </>
    );
};

export default Projects;
