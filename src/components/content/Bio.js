import classes from "./Bio.module.css";

const Bio = () => {
    return (
        <div className={classes.bio}>
            <p>
                I recently completed my service in the IDF Medical Corps where I worked as full stack developer / medical procurement engineer. During
                my service, I developed two web applications for the IDF that are at use, and spent my free time working on my own application for
                fellow language learning enthusiasts. I previously studied biomedical engineering at Tel Aviv University.
            </p>
            <a href="/">
                Contact me about <b>junior full stack developer roles</b> in the greater Tel Aviv area.
            </a>
        </div>
    );
};

export default Bio;
