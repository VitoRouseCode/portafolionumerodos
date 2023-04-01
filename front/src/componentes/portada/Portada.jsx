

import style from '../portada/Portada.module.css'

const Portada=()=>{
   
    return(
        <div className={style.pagina_portada}> 
        <div className={style.cajaPortada}>
                <div className={style.titulo_portada}><div className={style.titulovi}>Victor, Web Developer</div></div>
                <div  className={style.foto}></div>
                <div className={style.titulo_portada_dos}>portafolio</div>
        </div>
        </div>
    )
    
}

export default Portada;