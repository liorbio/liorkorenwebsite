import "./App.css";
import Header from "./components/content/Header";
import Bio from "./components/content/Bio";
import Projects from "./components/content/Projects";

function App() {
    return (
        <div className="App">
            <Header />
            <Bio />
            <Projects />
        </div>
    );
}

export default App;
