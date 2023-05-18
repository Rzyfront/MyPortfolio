import React,{ useState } from "react";
import { Header,Navbar,AboutMe,AnimatedContainer,Projects,Studies,Skills,ContactMe,ErrorNotify } from "./components/components"
import "./App.css";



function App() {



     const [notify , setNotify] = useState(false)
     const [CountErrors , setCountErrors] = useState(0)

     const HandleErrorCount = ()=>{
        setNotify(false);
        setCountErrors(1)
     }

     
  return (
    <div className="App">
      {notify && <ErrorNotify HandleErrorCount={HandleErrorCount} CountErrors={CountErrors}/>}
      
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
      <ContactMe setNotify={setNotify}/>
    </AnimatedContainer>
    
    </div>
 
  );
}

export default App;
