import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/body";
import Projects from "./components/projets";
import About from "./components/about";

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <About />
      <Projects />
    </div>
  );
}

export default App;
