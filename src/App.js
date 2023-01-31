import About from "./components/ui_components/About";
import Contact from "./components/ui_components/Contact";
import Experience from "./components/ui_components/Experience";
import Introduction from "./components/ui_components/Introduction";
import NavBarComponent from "./components/ui_components/NavBarComponent";
import Skills from "./components/ui_components/Skills";
import ScrollButton from "./components/style_components/ScrollButton";
import { useState } from "react";
import { createContext } from "react";
import Testimonials from "./components/ui_components/Testimonials";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <NavBarComponent />
        <About />
        <Introduction />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />

        <ScrollButton />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
