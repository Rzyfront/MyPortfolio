import React from 'react'
import { Error1_EN,Error2_EN } from "../../../Languages/EN"; 
import { Error1_ES,Error2_ES } from "../../../Languages/ES"
import {SiLinkedin,SiGmail,SiTwitter,SiGithub} from 'react-icons/si'
import { useSelector } from "react-redux";
function ErrorNotify({HandleErrorCount,CountErrors}) {

const {Languages} = useSelector(state=>state)

  if (Languages=== 'EN') {
    if (CountErrors>0) {
      var {Title,Text,Botton} = Error2_EN
    }else{
      var {Title,Text,Botton} = Error1_EN 
    }
  }else{
    if (CountErrors>0) {
      var {Title,Text,Botton} = Error2_ES
    }else{
      var {Title,Text,Botton} = Error1_ES 
    }
  }
  return (
    <div className='NotifyContact'>
        <div className='CardNotify'>
          <h2 className="Upss">{Title}</h2>
        <p className="ErrorText">{Text}</p>
        {(CountErrors>0) && <div className='Alternative'>
        <a target='_blank' href="https://www.linkedin.com/in/rzyfront/"><SiLinkedin/></a>
        <a target='_blank' href="mailto:rzyfront@gmail.com"><SiGmail/></a>
        <a target='_blank' href="https://twitter.com/RAfaelm78865444"><SiTwitter/></a>
        <a target='_blank' href="https://github.com/Rzyfront"><SiGithub/></a>

        </div>}
        <button onClick={HandleErrorCount} className="Ok">{Botton}</button>
        </div>
      </div>
  )
}

export default ErrorNotify