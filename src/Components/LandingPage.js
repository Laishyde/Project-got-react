import './LandingPage.css';
import Lanister from '../assets/lanister.png'
import Audio from '../assets/audiogot.mp3'
import ReactAudioPlayer from 'react-audio-player';
import Gif from '../assets/gif.gif'

const LandingPage = () => {
  return (
    <div>
      <h1>ULTIMEX</h1>
      <h2>Danerys Dargaryen</h2>
      <div className='wall'>
      <div className='space'>
          <div class="btn btn-one">
            <span>ASSISTA AGORA</span>
          </div>
      </div>
      <div className='space one'>
          <div class="btn btn-one">
            <span>ASSISTA AGORA</span>
          </div>
      </div>
      <div className='space two'>
          <div class="btn btn-one">
            <span>ASSISTA AGORA</span>
          </div>
      </div>
      <div className='space tre'>
          <div class="btn btn-one">
            <span>ASSISTA AGORA</span>
          </div>
      </div>
      </div>
      <div className='sound' >
      <h1>Tyrion Lannister</h1>
      <img className='ty' src={Lanister} alt="" />
      <h2>Escute a trilha sonora da série</h2>
      <ReactAudioPlayer
        src={Audio}
        autoPlay
        controls
      />
      </div>
      <img className='draco' src={Gif} alt="gif" />
    
    
    </div>
  )
}

export default LandingPage