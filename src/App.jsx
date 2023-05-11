import react from "react";
import { Header,Navbar,AboutMe,AnimatedContainer } from "./components/components"

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
    </div>
 
  );
}

export default App;
