
import './Header.css';




const Header = () => {
  return (
    <div className='Content'>
      <input type="checkbox" id="active" />
      <label for="active" className="menu-btn"><i class="fas fa-bars"></i></label>
      <div class="wrapper">
        <ul>
          <li><a href="https://www.hbobrasil.com/share/series/detail/game-of-thrones/13673">Assista agora</a></li>
          <li><a href="https://www.hbomax.com/br/pt/series/urn:hbo:series:GYsYeoAxKH8LCwgEAAAOR">TV Shows</a></li>
          <li><a href="https://elivros.love/livro/baixar-a-guerra-dos-tronos-as-cronicas-de-gelo-e-fogo-vol-1-george-r-r-martin-epub-pdf-mobi-ou-ler-online">Livros</a></li> 
        </ul>
      </div>

      <ul className='menu-bar' >
        <li><a href="https://www.hbobrasil.com/share/series/detail/game-of-thrones/13673">  Assista agora</a>  </li>
        <li><a href="https://www.hbomax.com/br/pt/series/urn:hbo:series:GYsYeoAxKH8LCwgEAAAOR">TV Shows</a></li>
        <li> <a href="https://elivros.love/livro/baixar-a-guerra-dos-tronos-as-cronicas-de-gelo-e-fogo-vol-1-george-r-r-martin-epub-pdf-mobi-ou-ler-online"> Livros</a></li>
      </ul>

    </div>



  )
}

export default Header
