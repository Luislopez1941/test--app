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
                <div className='container__left'>
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className='right'>
                <div className='container__right'>
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
        <div className='main1'>
            <div className='left left__uno'>
                <div className='container__left'>
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className='right'>
                <div className='container__right'>
                    <div>
                        <h2>Personalizable y escalable</h2>
                        <p>En nuestra plataforma, puedes personalizarla con tu marca y adaptar los servicios 
                            según tus necesidades. Además, si tu negocio crece y necesitas más citas,
                            nuestra plataforma puede crecer contigo.
                        </p>
                    </div>
                 </div>
            </div>
        </div>
        <div className='main1'>
            <div className='left'>
                <div className='container__left'>
                    <img src={img4} alt="" />
                </div>
            </div>
            <div className='right'>
                <div className='container__right'>
                    <div>
                        <h2>Segura y confiable</h2>
                        <p>En nuestra plataforma nos tomaremos muy en serio la seguridad y la privacidad de la 
                            información personal y financiera de tus clientes y sus clientes. Cumplimos con 
                            los más altos estándares de seguridad y privacidad para asegurar que su información esté segura.
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
