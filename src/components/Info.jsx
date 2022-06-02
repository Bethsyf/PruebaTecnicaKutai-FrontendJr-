import React from 'react'
import { Carousel } from 'react-bootstrap'
import Footer from './Footer'

const Info = () => {
    return (
        <>
            <div className="m-3">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dmaviub4l/image/upload/v1654209990/qetoowry9ym4jaz8qk8j.jpg"
                            alt="First slide"
                            height="350px"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dmaviub4l/image/upload/v1654209936/j3uxelkx0swfkyo6okae.webp"
                            alt="Second slide"
                            height="350px"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dmaviub4l/image/upload/v1654209886/mhxekpuegkm4xnttey8t.jpg"
                            alt="Third slide"
                            height="350px"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="m-5 ">
                <h1 className="m-5  text-center text-primary">Historia Pokemon</h1>
                <p className="m-5 ">Cuando el creador, Satoshi Tajiri, era joven, uno de sus pasatiempos favoritos era la recolección y colección de insectos. 
                Tajiri se dirigió a la ciudad de Tokio a estudiar, ya que su padre quería que fuese ingeniero. Sin embargo, a Tajiri no le agradaba la idea de estudiar y se dedicaba más a pasatiempos como los videojuegos. 
                Pasó un tiempo y Tajiri llegó a trabajar como jugador de prueba de algunos juegos para revistas, junto a Ken Sugimori, con quien hizo una gran amistad. En 1989 crearon una revista llamada Game Freak. 
                </p>
                <p className="m-5">Con el éxito de la consola NES, los dos decidieron crear algo innovador para la consola, y Tajiri decidió hacer que Game Freak se convirtiera en una compañía. Comenzó a trabajar en un juego de rompecabezas llamado Mendel Palace (conocido en Japón como Quinty), el cual fue lanzado en 1989, obteniendo buen éxito, lo cual marcó el principio de la historia de la compañía. 
                Al año siguiente, los dos habían decidido crear un juego para la consola Game Boy. Tajiri al ver el Game Link Cable, tuvo la idea de un juego en donde se pudiera transferir información de una Game Boy a otra. Influenciado por sagas como Final Fantasy y Dragon Quest, Tajiri asoció la idea de la metamorfosis. Tajiri creó un RPG en donde los monstruos podrían evolucionar y ser transportados de una consola portátil a otra. 
                El proyecto fue enviado a Nintendo. Mientras que Tajiri era quien tenía la idea principal, Sugimori era el encargado de los diseños de los monstruos. 
                </p>
                <p className="m-5">Así mismo, recibieron consejos por parte de Shigeru Miyamoto (creador de Mario Bros.) para mejorar el juego, que en ese entonces recibía el nombre de Capsule Monster. La producción de este proyecto duró cinco años. En aquel tiempo, la consola Game Boy entró en declive por la escasez de nuevos juegos, debido a que la compañía Nintendo ya no tenía más ideas para la consola portátil. 
                Por otro lado, Game Freak estuvo con carencia de acciones y recursos, por lo que su situación entró en jaque. Luego de esto, el proyecto de Tajiri fue renombrado como Pocket Monsters. 
                </p>
                <p className="m-5">En febrero de 1996 se lanzaron al mercado Pocket Monsters Aka and Midori ("Red" y "Green") Inicialmente el juego no tuvo éxito, pero al alcanzar un año, se había llegado a la marca de millón de copias. Al ver esto, Nintendo decidió enviar la serie a occidente. El nombre fue abreviado a Pokémon debido a que había una serie de Mattel conocida como Monster in My Pocket. Los juegos Pokémon Red y Blue se convirtieron en un éxito en los Estados Unidos, con más de 200.000 copias vendidas en la primera semana. El eslogan de la serie en Japón fue ¡Vamos a conseguir Pokémon! (ポケモンGETだぜ! Pokemon Getto Daze!?), el cual se hizo famoso. En los Estados Unidos, esta frase es conocida como “Gotta Catch'em All!”, en Hispanoamérica como “¡Atrápalos ya!” y en España; "¡Hazte con todos!"
                </p>
            </div>
            <Footer />
        </>
    )
}

export default Info