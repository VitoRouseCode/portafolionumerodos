import style from '../trabajos/TrabajosCom.module.css'
import {apprecetas,apprecetas2, apprecetas3,apprecetas4,apprecetas5} from '../trabajos/trabajosTextos'
import { useState } from 'react';
import Video from '../video/Video';

const TrabajosCom =()=>{

    const [state,setState]=useState(apprecetas);
    const video=" https://www.youtube.com/embed/mqreYaKYFcY";
    const alto='515';
    const ancho='760';

    const [currentPage,setCurrentPage]=useState('uno')
    

    const handleClick=(event)=>{
        const name = event.target.getAttribute('name')
        if(name==='dos'){
            setCurrentPage('dos')
            setState(apprecetas2)
        }
        if(name==='uno'){
            setCurrentPage('uno')
            setState(apprecetas)
        }
        if(name==='tres'){
            setCurrentPage('tres')
            setState(apprecetas3)
        }
        if(name==='cuatro'){
            setCurrentPage('cuatro')
            setState(apprecetas4)
        }
        if(name==='cinco'){
            setCurrentPage('cinco')
            setState(apprecetas5)
        }
        console.log(event.target.getAttribute('name'))
    }

    return(
        <div className={style.hoja}>   
            <div className={style.caja3}>
                <div className={style.container}>
                     
                    <div className={style.video}><Video video={video} ancho={ancho} alto={alto}/></div>
                    <div className={style.textodevideo}>
                    
                    <p className={style.parrafo}>{state}
                    <h2 className={style.titulo}>App: Recetas</h2>
                        <div onClick={handleClick}name='uno' className={`${'uno'===currentPage?style.num1:style.num}`}>1</div>
                        <div onClick={handleClick}name='dos'  className={`${'dos'===currentPage?style.num1:style.num}`}>2</div>
                        <div onClick={handleClick}name='tres' className={`${'tres'===currentPage?style.num1:style.num}`}>3</div>
                        <div onClick={handleClick}name='cuatro' className={`${'cuatro'===currentPage?style.num1:style.num}`}>4</div>
                        <div onClick={handleClick}name='cinco' className={`${'cinco'===currentPage?style.num1:style.num}`}>5</div>
                    </p>

                    </div>
                    

                </div>
        </div>
        </div>
          
    )
}

export default TrabajosCom;