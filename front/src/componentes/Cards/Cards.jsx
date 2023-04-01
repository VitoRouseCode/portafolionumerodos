import style from '../Cards/Cards.module.css'

const Cards =({text,img,titulo})=>{
    return(
        <>
          <div className={style.card}>
            <img  src={img}className={style.imagen1}/>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.texto}>{text}</p>
        </div>
        
        </>
      
    )
}

export default Cards;