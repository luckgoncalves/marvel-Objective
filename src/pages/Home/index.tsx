import React, { useEffect, useState, useCallback, useRef } from 'react';

import Content from '../../components/Content';
import Item from '../../components/Item';
import Search from '../../components/Search';

import { Body, ListHeader } from './styles';
import { api_marvel } from '../../services/api';
import Paginate from '../../components/Paginate';
import { useHistory } from 'react-router';

interface personagemsProps {
    name?: string;
    offset: number;
}

const Home: React.FC = () => {
    const history = useHistory();
    
    const intervalRef = useRef<any>();
    const [ personagems, setPersonagems ] = useState([])

    const [ total, setTotal ] = useState(0);
    const [ limit, setLimit ] = useState(0);
    const [ page, setPage ]   = useState(0);

    useEffect(() => {
        fetchPersonagems({offset: 0})
    }, [])
    
    const fetchPersonagems = ({name, offset}: personagemsProps) => {
        let query = ['orderBy=name', 'limit=10']
        
        name && query.push(`nameStartsWith=${name}`)
        query.push(`offset=${offset}`)
        
        api_marvel.get_personagems(`?${query.join('&')}`)
        .then(response => {
            if(response) {
                setPersonagems(response?.data.data.results)
                setTotal(response?.data.data.total)
                setLimit(response?.data.data.limit)
            }
        })
        .catch(console.log)
    }

    const searchPersonagems = useCallback((evt) => {
        
        clearTimeout(intervalRef.current)

        intervalRef.current = setTimeout(() => { fetchPersonagems({name: evt, offset: page * 10})}, 500)

    }, [page])

    const handlePagination = (page: number) => {
        setPage(page)

        let offset = page * 10
        fetchPersonagems({offset: offset})
    }

    const navigatePersonsagem = (hero: any) => {
        history.push(`/details/${hero.id}`)
    }

  return (
      <>
        <Body>
            <Content>
                <div className="header">
                    <div>
                        <h1>Busca de personagens</h1>
                    </div>
                    <div className="search">
                        <label>Nome do personagem</label>
                        <Search onChange={(evt) => searchPersonagems(evt)} />
                    </div>

                    <ListHeader>
                        <div className="info-header">
                            Personagem
                        </div>
                        <div className="info-header info-header-series">
                            Séries
                        </div>
                        <div className="info-header info-header-eventos">
                            Eventos
                        </div>
                    </ListHeader>
                    {personagems.map( (hero, index) => 
                        <Item
                            onClick={() => navigatePersonsagem(hero)}
                            key={index}
                        {
                            ...hero
                        } />
                    )}
                </div>
            </Content>
        </Body>

        <Paginate 
            currentPage={page}
            setPage={e => handlePagination(e)}
            total={total} 
            pageNeighbours={2}
            limit={limit} />
      </>
  );
}

export default Home;