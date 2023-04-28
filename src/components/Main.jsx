import React from 'react'
import './Main.css'
import img2 from '../assets/main/img2.png'
import img3 from '../assets/main/img3.png'
import img4 from '../assets/main/img4.png'

const Main1 = () => {
  return (
    <main className='main'>
      <div className='main__container'>
        <div className='main1'>
            <div className='left'>
                <div>
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className='right'>
                <div className='container__rigth'>
                    <div>
                        <h2>Facíl y Accesible</h2>
                        <p>Nuestra plataforma ha sido diseñada para lograr
                        tener una gran gestion de clientes efectiva, que sea 
                        facil de usar y accesible para cualquier persona, sin importar
                        su nivel de experiencia tecnológica
                        </p>
                    </div>
                 </div>
            </div>
        </div>
        <div className='main2'>
        <div className='left2'>
                <div className='container__left2'>
                    <h2>Facíl y Accesible</h2>
                    <p>Nuestra plataforma ha sido diseñada para lograr
                    tener una gran gestion de clientes efectiva, que sea 
                    facil de usar y accesible para cualquier persona, sin importar
                    su nivel de experiencia tecnológica
                    </p>
                </div>
            </div>
            <div className='right2'>
                <div className='container__rigth2'>
                    <div>
                        <img className='img' src={img3} alt="" />
                    </div>
                 </div>
            </div>
        </div>
        <div className='main1'>
            <div className='left'>
                <div>
                    <img src={img4} alt="" />
                </div>
            </div>
            <div className='right'>
                <div className='container__rigth'>
                    <div>
                        <h2>Facíl y Accesible</h2>
                        <p>Nuestra plataforma ha sido diseñada para lograr
                        tener una gran gestion de clientes efectiva, que sea 
                        facil de usar y accesible para cualquier persona, sin importar
                        su nivel de experiencia tecnológica
                        </p>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Main1