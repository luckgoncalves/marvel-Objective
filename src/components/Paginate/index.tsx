import React, { useEffect, useState } from 'react';

import { Container, NumberPage, AllPrevious, Previous, AllNext, Next } from './styles';

interface paginateProps {
    total: number;
    limit: number;
    page: number;
    pageNeighbours?: number;
    setPage: (e: number) => void;
}

interface listProps {
    total: number;
    limit: number;
    pageNeighbours?: number;
}


const Paginate: React.FC<paginateProps> = ({total, limit, pageNeighbours, page, setPage}) => {
    
    const [ pages, setTotalPages ] = useState(0)


    useEffect(() => {
       
        getPageList({total, limit, pageNeighbours})
        
    }, [total, limit, pageNeighbours, page]);
    
    const getPageList = ({total, limit, pageNeighbours}: listProps) => {
        limit = typeof limit === 'number' ? limit : 30;
        total = typeof total === 'number' ? total : 0;

        pageNeighbours = typeof pageNeighbours === 'number'
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0;

        setTotalPages(Math.ceil(total / limit))   
    }

    const renderPages = () => {

        let items = []
        let leftSide = page -2;
        if(leftSide <= 0) leftSide=1;

        let rightSide = page + 2;
        if(rightSide>total) rightSide = total;

        for(let number = leftSide; number <= rightSide; number++) {
            items.push(<NumberPage active={number === page}>{number}</NumberPage>)
        }

        return items

    }

  return (
        <Container>
            
            <div style={{visibility: page > 0 ? 'visible' : 'hidden' }}>
                <AllPrevious onClick={() => setPage(0)} />
                <Previous onClick={() => setPage(page - 1)} />
            </div>
            
            
            {renderPages()}

            {page + 1 < pages && (
                <>
                    <Next onClick={() => setPage(page + 1)} />
                    <AllNext onClick={() => setPage(total)}/>
                </>
            )}
        </Container>
    );
}

export default Paginate;