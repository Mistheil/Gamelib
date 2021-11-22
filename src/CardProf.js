import React from 'react'
import './CardProf.css'

import { AiFillInstagram } from 'react-icons/ai'
import { FaGithubAlt } from 'react-icons/fa'
import { FaSteam } from 'react-icons/fa'


export default function CardProf ({img, nama, nim, github, insta, steam}){
    return (
        <div className = "containerProfile">
            <img src={img} alt="" className="profPic"/>
            <div className="containerDataProfile">
                 <h3 id = "nama">   {nama} </h3>
                 <p id="nim">       {"NIM : " + nim} </p>
                 <div className="containerSosmed">

                     <a href={`https://www.instagram.com/${insta}/`}
                        target="_blank"
                        rel="noreferrer"
                     >
                         <AiFillInstagram className="sosmedIcon" size="40px" />
                     </a>
                     <a href={`https://github.com/${github}`}
                        target="_blank"
                        rel="noreferrer"
                     >
                         <FaGithubAlt className="sosmedIcon" size="40px" />
                     </a>
                     <a href={`https://steamcommunity.com/id/${steam}`}
                        target="_blank"
                        rel="noreferrer"
                     >
                         <FaSteam className="sosmedIcon" size="35px" />
                     </a>
                 </div>
            </div>
        </div>
    )
}
