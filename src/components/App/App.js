import './assets/App.css'
import MenuPausa from './components/MenuPausa/MenuPausa'
import Imagen from './assets/gotenks.jpg'

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
