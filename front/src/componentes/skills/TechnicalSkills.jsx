import style from '../skills/TechnicalSkills.module.css'
import { useState } from 'react'
import { node,reduxs,javaScript, css, html, react ,java,express, postgres} from './descripciones';

const TechnicalSkills =()=>{

const[stateDes,setStateDes]=useState('');



const handleClick=(event)=>{
    if(event.target.getAttribute('name')==='reduxs')
        setStateDes(reduxs)
        if(event.target.getAttribute('name')==='node')
        setStateDes(node)
        if(event.target.getAttribute('name')==='javascript')
        setStateDes(javaScript)
        if(event.target.getAttribute('name')==='css')
        setStateDes(css)
        if(event.target.getAttribute('name')==='html')
        setStateDes(html)
        if(event.target.getAttribute('name')==='react')
        setStateDes(react)
        if(event.target.getAttribute('name')==='java')
        setStateDes(java)
        if(event.target.getAttribute('name')==='express')
        setStateDes(express)
        if(event.target.getAttribute('name')==='postgres')
        setStateDes(postgres)

    
}

    return(
        <div className={style.hoja}>
            <div className={style.descripcion}>
                {stateDes?<div>{stateDes}</div>:<div className={style.clickIcon}>haz click en los iconos para ampliar detalles</div>}
            </div>
        <div className={style.caja}>
        <div className={style.container}>
            <div name="node" onClick={handleClick}  className={style.cuadro1}>
                
            </div>
            <div name='javascript' onClick={handleClick}  className={style.cuadro2}></div>
            <div name='react' onClick={handleClick} className={style.cuadro3}></div>
            <div name='postgres' onClick={handleClick}className={style.cuadroPostgres}></div>
            <div name='express'onClick={handleClick} className={style.cuadroExpress}></div>
            <div name='reduxs' onClick={handleClick} className={style.cuadroRedux}></div>
            <div name='css' onClick={handleClick} className={style.cuadroCss}></div>
            <div name='java' onClick={handleClick} className={style.cuadroJava}></div>
            <div name='html' onClick={handleClick}className={style.cuadroHtml}></div>
            
            
        
        </div>
        </div>
        </div>
    )
}
export default TechnicalSkills;