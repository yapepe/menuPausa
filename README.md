# MenuPausa.js
Menu tipo hamburger con desplegable Modal emulando la pausa de un videojuego
## Uso
MenuPausa.js recibe un array de componentes HTML o JSX y una imagen
``` js 
import MenuPausa from './components/MenuPausa/MenuPausa'
import Imagen from './assets/NOMBREDELAIMAGEN.jpg'

export default function App() {
  return (
    <div className="app">
      <MenuPausa
      lista = {[ 
        <a href='/'>aaaaaaa</a>,
        <a href='/'>aaaaaaa</a>,
        <a href='/'>aaaaaaa</a>
      ]}
      imagen = { Imagen }
      />
    </div>
  )
}

```