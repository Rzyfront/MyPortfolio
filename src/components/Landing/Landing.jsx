import React from "react";
import videoMp4 from "../../assets/Rzy_Portfolio_Landing.mp4";
import videoWebm from "../../assets/Rzy_Portfolio_Landing.webm";
import Myimg from "../../assets/Mi_img.svg";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";
function Landing() {
  return (
    <div className="Landing">
      <video autoPlay loop muted>
        <source src={videoMp4} type="video/mp4" />
        <source src={videoWebm} type="video/webm" />
      </video>

      <Navbar />

      <div className="Container_Landing">
        <div className="Left_Landing">
          <h2>Aqui se esta construyendo un chatbot con IA</h2>
          <h3>Vuelve pronto</h3>
        </div>

        <div className="Rigth_Landing">
          <img src={Myimg} alt="RafaelMartinez" width="640px" />
          <div className="cubo">
            <div className="arriba"></div>
            <div>
              {[...Array(4)].map((_, i) => (
                <span key={i} style={{ "--i": i }}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
