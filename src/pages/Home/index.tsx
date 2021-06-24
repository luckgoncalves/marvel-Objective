import React, { useEffect, useState, useCallback, useRef, useContext } from 'react';
import { useHistory } from 'react-router';

import Content from '../../components/Content';
import Item from '../../components/Item';
import Search from '../../components/Search';
import Paginate from '../../components/Paginate';

import { PaginateContext } from '../../contexts/PaginateContext';

import { api_marvel } from '../../services/api';

import { Body, ListHeader } from './styles';


interface personagemsProps {
    name: string;
    offset: number;
}

const Home: React.FC = () => {
    const history = useHistory();

    const {
        handleLimit,
        handleTotal,
        handleCurrentPage, 
        currentPage } = useContext(PaginateContext)
    
    const intervalRef = useRef<any>();
    const searchRef  = useRef();
        

    const [ personagems, setPersonagems ] = useState([])
    
    useEffect(() => {
        fetchPersonagems({name: '', offset: 0})

    },[]) //eslint-disable-line
    
   
    const fetchPersonagems = useCallback(({name, offset}: personagemsProps) => {
        let query = ['orderBy=name', 'limit=10']
        
        name && query.push(`nameStartsWith=${name}`)
        query.push(`offset=${offset}`)
        
        api_marvel.get_personagems(`?${query.join('&')}`)
        .then(response => {
            if(response) {
                setPersonagems(response?.data.data.results)
                handleTotal(response?.data.data.total)
                handleLimit(response?.data.data.limit)
            }
        })
        .catch(console.log)
    },[handleTotal, handleLimit])

    const searchPersonagems = useCallback((evt) => {
        
        clearTimeout(intervalRef.current)

        searchRef.current = evt;
        let search = evt ? {name: evt, offset: 0} : {name: evt, offset: currentPage * 10}
        
        intervalRef.current = setTimeout(() => { fetchPersonagems(search)}, 500)

    }, [currentPage, fetchPersonagems]) 

    const handlePagination = (page: number) => {
        
        handleCurrentPage(page)

        let name = searchRef.current || ''
        
        let search = {name: name, offset: page * 10}
        fetchPersonagems(search)
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
            setPage={e => handlePagination(e)}
            pageNeighbours={2}
        />
      </>
  );
}

export default Home;