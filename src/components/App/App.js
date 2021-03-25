import './assets/App.css'
import MenuPausa from './components/MenuPausa/MenuPausa'
import Imagen from '../App/assets/gotenks.jpg'

export default function App() {
  return (
    <div className="app">
      <MenuPausa
      lista = {[ 
        <a href='/'>aaaaaaa</a>,
        <a href='/'>aaaaaaa</a>,
        <a href='/'>aaaaaaa</a>
      ]}
      imagen = {<img href={Imagen} alt=''/>}
      />
    </div>
    
    
    
  )
}
