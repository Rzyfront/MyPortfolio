import react from "react";
import { Header,Navbar,AboutMe,AnimatedContainer,Projects,Studies,Skills,Experience,ContactMe } from "./components/components"

import "./App.css";

function App() {
  return (
    <div className="App"> 
    <Navbar/> 
     <AnimatedContainer>
      <Header/>
    </AnimatedContainer>
    <AnimatedContainer>
      <AboutMe/>
    </AnimatedContainer>
    <AnimatedContainer>
      <Projects/>
    </AnimatedContainer>
      <AnimatedContainer>
      <Studies/>
    </AnimatedContainer>
    <AnimatedContainer>
      <Skills/>
    </AnimatedContainer>
    <AnimatedContainer>
      <Experience/>
    </AnimatedContainer>
      <AnimatedContainer>
      <ContactMe/>
    </AnimatedContainer>
    
    </div>
 
  );
}

export default App;
