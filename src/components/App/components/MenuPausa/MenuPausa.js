import './assets/MenuPausa.css'
import { useState } from 'react'

export default function MenuPausa({ lista }) {
    const [mostrarModal , setMostrarModal] = useState(false)

  return (
    <div className="MenuPausa">
        {(!mostrarModal)
        ? <div 
            className="MenuPausa__boton" 
            onClick={ () => setMostrarModal(true)}
          >=</div>
        : <div className='MenuPausa__modal'>
            <div className='MenuPausa__modal__tache'
                onClick={ () => setMostrarModal(false)}
            >x</div>
            <div className='MenuPausa__modal__imagen'>
            </div>
            <div className='MenuPausa__modal__texto'>
            { (Array.isArray(lista))
                ? lista.map( lista => {
                    return(
                        <div className='MenuPausa__modal__texto__lista'>
                            { lista }
                        </div>
                    )
                })
                : console.log('CRITICAL ERROR: la entrada de hamburger no es un array')    
            }
            </div>
          </div>
        }
    </div>
  )
}

