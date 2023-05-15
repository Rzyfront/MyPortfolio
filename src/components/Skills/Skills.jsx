import React from 'react'
import './Skills.css'
import Myimg from "../../assets/Mi_img.svg";
import Img from '../../assets/Imgtapa.png'
import Img1 from '../../assets/ImageSide1.png'
import Img2 from '../../assets/ImageSide2.png'
import Img3 from '../../assets/ImageSide3.png'
import Img4 from '../../assets/ImageSide4.png'
import {SiJavascript,SiNodedotjs,SiReact,SiExpress,SiPostgresql,SiMongodb,SiHtml5,SiCss3,SiRedux,SiGit,SiGithub,SiSass,SiJest,SiPhotopea,SiAdobephotoshop,SiFigma,SiBootstrap,SiTailwindcss,SiMysql,SiTypescript} from 'react-icons/si'
import { useSelector } from 'react-redux';


function Skills() {
      const {Languages} = useSelector(state=>state)

    const Images = [
    Img1,
    Img2,
    Img3,
    Img4
  ]
  return (
    <div id='Skills' className='Container-Skills'>
      <h2 className='Skills-Title'>{Languages==='EN'
      ?'Skills'
      :'Habilidades'}</h2>
      <div className='Skills-Box'>
        <div className="Left-Skills">
          <img src={Myimg} alt="RafaelMartinez" width="550px" />
          <div className="cubo">
            <div className="arriba"><img src={Img} alt="" /></div>
            <div>
              {[...Array(4)].map((_, i) => (
                <span key={i} style={{ "--i": i }}> <img src={Images[i]} alt="" /></span>
              ))}
            </div>
          </div>
        </div>
        <div className='Rigth-Skills'>
        <div className='Skill-Tag'><SiHtml5/><p>HTML</p></div>
        <div className='Skill-Tag'><SiCss3/><p>CSS</p></div>
        <div className='Skill-Tag'><SiJavascript/><p>JavaScript</p></div>
         <div className='Skill-Tag'><SiTypescript/><p>TypeScript</p>
        </div>
        <div className='Skill-Tag'><SiNodedotjs/><p>Node.js</p></div>
        <div className='Skill-Tag'><SiReact/><p>React.js</p></div>
        <div className='Skill-Tag'><SiExpress/><p>Express.js</p></div>
        <div className='Skill-Tag'><SiPostgresql/><p>PostgresSql</p></div>
        <div className='Skill-Tag'><SiMongodb/><p>MongoDB</p></div>
        <div className='Skill-Tag'><SiRedux/><p>Redux</p></div>
        <div className='Skill-Tag'><SiGit/><p>Git</p></div>
        <div className='Skill-Tag'><SiGithub/><p>GitHub</p>
        </div>
        <div className='Skill-Tag'><SiSass/><p>Sass</p>
        </div>
        <div className='Skill-Tag'><SiJest/><p>Jest.js</p>
        </div>
        <div className='Skill-Tag'><SiPhotopea/><p>Photopea</p>
        </div>
        <div className='Skill-Tag'><SiAdobephotoshop/><p>Photoshop</p>
        </div>
        <div className='Skill-Tag'><SiFigma/><p>Figma</p>
        </div>
        <div className='Skill-Tag'><SiBootstrap/><p>Booststrap</p>
        </div>
        <div className='Skill-Tag'><SiTailwindcss/><p>Tailwindcss</p>
        </div>
        <div className='Skill-Tag'><SiMysql/><p>MySQL</p>
        </div>

        </div>
        
        
        
      </div>
    </div>
  )
}

export default Skills