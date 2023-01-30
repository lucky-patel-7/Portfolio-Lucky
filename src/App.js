import About from "./components/ui_components/About";
import Contact from "./components/ui_components/Contact";
import Experience from "./components/ui_components/Experience";
import Introduction from "./components/ui_components/Introduction";
import NavBarComponent from "./components/ui_components/NavBarComponent";
import Skills from "./components/ui_components/Skills";

function App() {
  return (
    <>
      <NavBarComponent />
      <About />
      <Introduction />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
