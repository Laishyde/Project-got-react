import React from 'react'
import './Container.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Dan from '../assets/danery.png';






const Container = () => {

    return (
        <div>

            <div className='test'>
                
                <h1 className='text'>Game of Thones </h1>
                <h2>O inverno está chegando! .</h2>
                <p>Game of Thrones conta a históra de um lugar onde uma força destruiu o equilíbrio das estações, há muito tempo. Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, as reivindicações e as forças sobrenaturais correm as portas do Reino dos Sete Reinos, A irmandade da Patrulha da Noite busca proteger o reino de cada criatura que pode vir de lá da Muralha, mas já não tem os recursos necessários para garantir a segurança de todos. Depois de um verão de dez anos, um inverno rigoroso promete chegar com um futuro mais sombrio. Enquanto isso, conspirações e rivalidades correm no jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.</p>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item interval={1000}>
                        <img className='Size'
                            src={Dan}
                            alt="Image One"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className='Size'
                            src={Dan}
                            alt="Image Two"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className='Size'
                            src={Dan}
                            alt="Image Two"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className='Size'
                            src={Dan}
                            alt="Image Two"
                        />
                    </Carousel.Item>

                </Carousel>
            </div>
        
        </div>


    )
}



export default Container