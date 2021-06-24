import React, { useEffect, useState } from 'react';

import { Container, NumberPage, AllPrevious, Previous, AllNext, Next } from './styles';

interface paginateProps {
    total: number;
    limit: number;
    currentPage: number;
    pageNeighbours?: number;
    setPage: (e: number) => void;
}

interface listProps {
    total: number;
    limit: number;
    pageNeighbours?: number;
}

const Paginate: React.FC<paginateProps> = ({total, limit, pageNeighbours, currentPage, setPage}) => {
    
    const [ pages, setTotalPages ] = useState(0)

    useEffect(() => {
       
        getPageList({total, limit, pageNeighbours})
        
    }, [total, limit, pageNeighbours]);
    
    const getPageList = ({total, limit, pageNeighbours}: listProps) => {
        limit = typeof limit === 'number' ? limit : 30;
        total = typeof total === 'number' ? total : 0;

        pageNeighbours = typeof pageNeighbours === 'number'
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0;

        setTotalPages(Math.ceil(total / limit))   
    }

    const renderPages = () => {
        let widthScreen = window.innerWidth;
        
        let side = widthScreen > 500 ? 2 : 1;

        let items = []
        let leftSide = currentPage - side;
        if(leftSide <= 0) leftSide = 0;

        let rightSide = currentPage + side;
        if(rightSide > pages -1) rightSide = pages -1;
        
        for(let number = leftSide; number <= rightSide; number++) {
            items.push(
                <NumberPage 
                    onClick={() => setPage(number)} 
                    active={number === currentPage}
                >
                    {number + 1}
                </NumberPage>
            )
        }

        return items

    }

  return (
        <Container>
            
            <div style={{visibility: currentPage > 0 ? 'visible' : 'hidden' }}>
                <AllPrevious onClick={() => setPage(0)} />
                <Previous onClick={() => setPage(currentPage - 1)} />
            </div>
            
            {renderPages()}

            <div style={{visibility: currentPage + 1 < pages -1 ? 'visible' : 'hidden' }}>
                <Next onClick={() => setPage(currentPage + 1)} />
                <AllNext onClick={() => setPage(pages - 1)}/>
            </div>
            
        </Container>
    );
}

export default Paginate;