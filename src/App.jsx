import React,{ useState } from "react";
import { Header,Navbar,AboutMe,AnimatedContainer,Projects,Studies,Skills,ContactMe,ErrorNotify,SuccessNotify } from "./components/components"
import "./App.css";



function App() {



     const [notify , setNotify] = useState(false)
     const [CountErrors , setCountErrors] = useState(0)
     const [success, setSuccess] = useState(false)
     const [CountSuccess , setCountSuccess] = useState(0)

     const HandleErrorCount = ()=>{
        setCountErrors(CountErrors+1)
        setNotify(false);
     }

     const handlerSuccess = () =>{
        setCountSuccess(CountSuccess+1)
        setSuccess(false)
     }

     
  return (
    <div className="App" onClick={()=>setNotify(false)}>
      {(notify)  && <ErrorNotify HandleErrorCount={HandleErrorCount} CountErrors={CountErrors}/>}
      {(success && CountSuccess<1) && <SuccessNotify handlerSuccess={handlerSuccess}/>}
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
      <ContactMe setNotify={setNotify} setSuccess={setSuccess}/>
    </AnimatedContainer>
    
    </div>
 
  );
}

export default App;
