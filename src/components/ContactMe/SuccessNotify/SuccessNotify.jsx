import React from 'react'
import { Success_EN } from "../../../Languages/EN"; 
import { Success_ES } from "../../../Languages/ES"
import {SiLinkedin,SiGmail,SiTwitter,SiGithub} from 'react-icons/si'
import { useSelector } from "react-redux";
import '../../../App.css';
function SuccessNotify({handlerSuccess}) {

const {Languages} = useSelector(state=>state)

  if (Languages=== 'EN') {
      var {Title,Text,Ad,Botton} = Success_EN 
  }else{
      var {Title,Text,Ad,Botton} = Success_ES 
  }
  return (
    <div className='NotifyContact'>
        <div className='CardNotify' onClick={(e)=>e.stopPropagation()}>
          <h2 className="Upss">{Title}</h2>
        <p className="ErrorText">{Text}</p>
        <p className="Ad">{Ad}</p>
        <div className='Alternative'>
        <a target='_blank' href="https://www.linkedin.com/in/rzyfront/"><SiLinkedin/></a>
        <a target='_blank' href="mailto:rzyfront@gmail.com"><SiGmail/></a>
        <a target='_blank' href="https://twitter.com/RAfaelm78865444"><SiTwitter/></a>
        <a target='_blank' href="https://github.com/Rzyfront"><SiGithub/></a>
        </div>
        <button onClick={handlerSuccess} className="Ok" type='button'>{Botton}</button>
        </div>
      </div>
  )
}

export default SuccessNotify