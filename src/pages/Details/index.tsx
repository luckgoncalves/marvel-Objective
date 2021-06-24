import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { api_marvel } from '../../services/api';
import { Biografy, Container, Comic, ListComics, Comics, ComigThumbnail } from './styles';

interface thumbinailProps {
    thumbnail: {
        path: string;
        extension: string;
    }
}

interface personagemProps extends thumbinailProps {
    name: string;
    description: string;

    
}

const Details: React.FC = () => {
    const  params = useParams<any>()
    const [ personagem, setPersonsagem ] = useState<personagemProps>();
    const [ quadrinhos, setQuadrinhos] = useState<any>();

    useEffect(() => {
        // Consulta dados do personagem
        fetch_personsagem()

        // Consulta os quadrinhos em que o personagem participou
        fetch_series()
    },[params.id]) //eslint-disable-line
    
    const fetch_personsagem = () => {
        api_marvel.find_personagem(params.id)
        .then( response => {
            setPersonsagem(response?.data.data.results[0])
        })
    }

    const fetch_series = () => {
        api_marvel.find_series(params.id)
        .then(response => setQuadrinhos(response?.data.data.results))
    }

  return (
      <Container bg={`${personagem?.thumbnail.path}.${personagem?.thumbnail.extension}`} >
          <div className="bg-color">
            <div className="info">
                <img alt="Personagem" className="image-personagem" src={`${personagem?.thumbnail.path}.${personagem?.thumbnail.extension}`} />
                <Biografy>
                    <h1>{personagem?.name}</h1>
                    <p>{personagem?.description || 'Sem Descrição'}</p>
                </Biografy>
            </div>


            <Comics>
                <h2>Quadrinhos</h2>
                
                <ListComics>
                    {quadrinhos && quadrinhos.map((quadrinho:any) => 
                        <Comic>    
                            <ComigThumbnail bg={`${quadrinho?.thumbnail.path}.${quadrinho?.thumbnail.extension}`}/>  
                            <h3>{quadrinho?.title}</h3>

                            <div className="description">
                                <p>{quadrinho.description || 'Sem descrição'}</p>
                            </div>
                        </Comic>
                    )}
                </ListComics>

            </Comics>
          </div>
      </Container>
  );
}

export default Details;