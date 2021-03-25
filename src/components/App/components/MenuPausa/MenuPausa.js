import './assets/MenuPausa.css'
import { useState } from 'react'

export default function MenuPausa({ lista, imagen}) {
    const [mostrarModal , setMostrarModal] = useState(false)
    let linkKey = 0

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
              <img src={imagen} alt=''className='MenuPausa__modal__imagen--activada'/>
            </div>
            <div className='MenuPausa__modal__texto'>
            { (Array.isArray(lista))
                ? lista.map( link => {
                    linkKey++
                    return(
                        <div 
                            key={ linkKey } 
                            className='MenuPausa__modal__texto__lista'>
                            { link }
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

