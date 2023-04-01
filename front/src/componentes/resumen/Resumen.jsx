import style from '../resumen/Resumen.module.css';

const Resumen=({text})=>{
    return(
        <div className={style.cajaLogo2}>
            <div >{text}</div>  
        </div>
    )
}

export default Resumen;
