import React, {useEffect} from 'react'
import style from './Studies.module.css'
import { Studies_EN } from '../../Languages/EN'
import { Studies_ES } from '../../Languages/ES'
import { useSelector } from 'react-redux'

function Studies() {
  const {Languages} = useSelector(state=>state)
  
  const {Studies} = Languages === 'EN' ? Studies_EN : Studies_ES;
  return (
    <div id='Studies' className={style.Container}>
        <h2 className={style.Title}>{Languages==='EN'?Studies_EN.Title:Studies_ES.Title}</h2>
        <div className={style.StudiesBox}>
          <ul className={style.ul}>
            {
              Studies.map(({degree,date,description},i) =>{
                return<li key={i} className={style.li}>
                      <h3 className={style.degree}>{degree}</h3>
                      <p className={style.date}>{date}</p>
                      <p className={style.description}>{description}</p>
                      </li>
              })
            }
          </ul>
        </div>
    </div>
  )
}

export default Studies