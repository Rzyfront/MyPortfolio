import React from "react";
import Myimg from "../../assets/Mi_img.svg";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";
import Img from '../../assets/Imgtapa.png'
import Img1 from '../../assets/ImageSide1.png'
import Img2 from '../../assets/ImageSide2.png'
import Img3 from '../../assets/ImageSide3.png'
import Img4 from '../../assets/ImageSide4.png'
import Typed from 'typed.js';
import { useEffect,useRef } from "react";

function Landing() {

  const el = useRef(null);

   React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<span>Welcome</span> to my virtual <span>space</span>!"],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const Images = [
    Img1,
    Img2,
    Img3,
    Img4
  ]
  return (
    <div className="Landing animated-element">
      <Navbar />

      <div className="Container_Landing">
        <div className="Left_Landing">
          <div className="CardInfoLanding" >
            <h2 ref={el}></h2>
             <p className="animated-element2">I'm <b>Rafael Martinez</b>, an enthusiastic <span>Full Stack</span> developer with outstanding skills in <span>JavaScript</span>, <span>ReactJS</span>. My focus is on creating <span>high-performance</span>, elegantly designed web applications. I invite you to explore my portfolio and learn more <span>about me</span>.</p>  
             <button className="animated-element2">READY</button>
          </div>
          
         
        </div>

        <div className="Rigth_Landing">
          <img src={Myimg} alt="RafaelMartinez" width="640px" />
          <div className="cubo">
            <div className="arriba"><img src={Img} alt="" /></div>
            <div>
              {[...Array(4)].map((_, i) => (
                <span key={i} style={{ "--i": i }}> <img src={Images[i]} alt="" /></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
