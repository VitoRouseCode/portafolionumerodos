import { useState } from 'react';
import style from '../about/About.module.css';




const About=()=>{

    const [data,setData]=useState(false)

    const handleClick=()=>{
        if(data===false){
            setData(true)
        }else{
            setData(false)
        }
        
    }
    const [dataEn,setDataEn]=useState(false)

    const handleClickdos=()=>{
        if(dataEn===false){
            setDataEn(true)
        }else{
            setDataEn(false)
        }
        
    }

    return(
        <div className={style.box}>
        <div className={style.cajaAbout}>
            <div className={style.titulo}>
                Carta Abierta
                <div className={style.botonesCajita}>
                <button className={!data?style.botonOn:style.botonOff} onClick={handleClick}>{!data?<>Leer</>:<>ocultar</>}</button>
                <button disabled={data} className={!dataEn?style.botonOndos:style.botonOffdos} onClick={handleClickdos}>{!dataEn?<>English Version</>:<>Hide</>}</button>
                </div>
            </div>
            <div className={style.cajaAboutdos}>
                
                {data?<> <p className={style.encabezado}>Estimados lectores,</p>
            <br></br>
            <p className={style.cuerpo}>Permítanme presentarme, mi nombre es Victor, y me gustaría compartir con ustedes un poco acerca de mi historia y mis pasiones.
            Soy originario de la hermosa isla de San Andrés, ubicada en el Caribe colombiano. Desde muy joven, descubrí mi pasión por la música, lo que me llevó a convertirme en un músico profesional. Sin embargo, también descubrí mi amor por la programación y el desarrollo web, y desde entonces he estado trabajando para combinar estas dos pasiones en mi vida.
            Además de la música y la programación, también me apasiona la filosofía, lo que me ha permitido tener una perspectiva más amplia y profunda en el mundo del desarrollo web. A lo largo de mi tiempo en la universidad, tomé todos los cursos de filosofía disponibles, lo que me permitió desarrollar una mente crítica y analítica para abordar cualquier desafío que se me presente.
            Aunque todavía no cuento con una amplia experiencia laboral en el desarrollo web, he trabajado en varios proyectos durante mi carrera universitaria y como freelancer. Recientemente, tuve la oportunidad de llevar mis habilidades al siguiente nivel y crear mi propio portafolio en un corto período de tiempo. Utilicé ReactJS junto con HTML y CSS para diseñar y desarrollar el sitio  mientras participaba en el bootcamp de programación web  'Henry'. Esta experiencia no solo me demostró mi capacidad para aprender rápidamente, sino también para aplicar mis conocimientos de manera efectiva en un proyecto práctico.


            Me considero una persona comprometida y responsable, siempre en busca de oportunidades para mejorar mis habilidades y conocimientos. Actualmente, estoy estudiando desarrollo de software en la universidad y tengo experiencia en HTML, CSS, JavaScript, ReactJS, SQL y lenguaje Java. Estoy muy emocionado por el futuro y espero poder contribuir con mis habilidades y conocimientos en cualquier proyecto que se me presente.
            En resumen, me encantaría tener la oportunidad de poner mis habilidades y conocimientos al servicio de cualquier proyecto desafiante y emocionante que se me presente. Estoy emocionado por lo que el futuro me depara y estoy seguro de que tengo mucho que ofrecer.
            </p>

            <p className={style.cuerpo}>¡Gracias por leer!
                Atentamente,<br></br>
                Victor
            
                </p></> :<div>{!dataEn && !data?<div className={style.foto}></div>:null}</div>}
                
                {dataEn?<> <p className={style.encabezado}>Dear readers,</p>
            <br></br>
            <p className={style.cuerpo}>Let me introduce myself, my name is Victor, and I would like to share a bit about my story and passions with you.
            I'm originally from the beautiful island of San Andres, located in the Colombian Caribbean. From a very young age, I discovered my passion for music, which led me to become a professional musician. However, I also discovered my love for programming and web development, and since then, I have been working to combine these two passions in my life.

            In addition to music and programming, I'm also passionate about philosophy, which has allowed me to have a broader and deeper perspective on the world of web development. Throughout my time in university, I took all available philosophy courses, which allowed me to develop a critical and analytical mind to approach any challenge that comes my way.

            Although I don't yet have extensive work experience in web development, I have worked on several projects during my university career and as a freelancer. Recently, I had the opportunity to take my skills to the next level and create my own portfolio in a short period of time. I used ReactJS along with HTML and CSS to design and develop the site while participating in the 'Henry' web programming bootcamp. This experience not only demonstrated my ability to learn quickly but also to effectively apply my knowledge in a practical project.

            I consider myself a committed and responsible person, always looking for opportunities to improve my skills and knowledge. Currently, I'm studying software development in university and have experience in HTML, CSS, JavaScript, ReactJS, SQL, and Java language. I'm very excited about the future and hope to contribute my skills and knowledge to any challenging and exciting project that comes my way.

            In summary, I would love to have the opportunity to put my skills and knowledge at the service of any challenging and exciting project that comes my way. I'm excited about what the future holds and confident that I have a lot to offer.


            </p>

            <p className={style.cuerpo}>Thank you for reading!
            Sincerely,<br></br>
                Victor
            
                </p></> :''}
            
        </div>
        
        
            </div>
            </div>
    )
}
export default About;