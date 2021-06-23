import React, { useEffect, useState, useCallback, useRef } from 'react';

import Content from '../../components/Content';
import Item from '../../components/Item';
import Search from '../../components/Search';

import { Body, ListHeader } from './styles';
import { api_marvel } from '../../services/api';
import Paginate from '../../components/Paginate';


const Home: React.FC = () => {
    const intervalRef = useRef<any>();
    const [ personagems, setPersonagems ] = useState([])
    

    useEffect(() => {
        fetchPersonagems()
    }, [])
    
    const fetchPersonagems = (name?:String) => {
        let query = ['orderBy=name', 'limit=10']
        
        name && query.push(`nameStartsWith=${name}`)
        
        api_marvel.get_personagems(`?${query.join('&')}`)
        .then(response => response && setPersonagems(response?.data.data.results))
        .catch(console.log)
    }

    const searchPersonagems = useCallback((evt) => {
        
        clearTimeout(intervalRef.current)

        intervalRef.current = setTimeout(() => { fetchPersonagems(evt)}, 500)


    }, [])


console.log(personagems)
  return (
      <>
        <Body>
            <Content>
                <div style={{width: '100%', marginBottom: '24px'}}>
                    <div>
                        <h1>Busca de personagens</h1>
                    </div>
                    <div>
                        <label>Nome do personagem</label>
                        <Search onChange={(evt) => searchPersonagems(evt)} />
                    </div>

                    <ListHeader>
                        <div className="info-header">
                            Personagem
                        </div>
                        <div className="info-header">
                            Séries
                        </div>
                        <div className="info-header">
                            Eventos
                        </div>
                    </ListHeader>
                    {personagems.map( (hero, index) => 
                        <Item
                            key={index}
                        {
                            ...hero
                        } />
                    )}
                    <Paginate />
                </div>
            </Content>
        </Body>
      </>
  );
}

export default Home;