import React from 'react';

import { Container } from './styles';

interface seriesProps {
    name: string
}


interface heroProps {
    onClick: () => void;

    key?: number;
    name: string;
    series: {
        items: Array<seriesProps>
    };
    events: {
        items: Array<seriesProps>
    };
    eventos: string;
    thumbnail: {
        extension: string;
        path: string;
    }
}

const Item: React.FC<heroProps> = ({thumbnail, name, series, events, onClick}) => {
    
  return (
      <Container onClick={() => onClick()}>
          <div className="info" >
              <img src={thumbnail.path.concat(`.${thumbnail.extension}`)} alt={name} />
              <span>{name}</span>
          </div>
          <div className="info info-series">
              <p>{series.items.slice(0,2).map(item => item.name).join('\n') || '-'}</p>
          </div>
          <div className="info info-eventos">
              <p>{events.items.slice(0,3).map(item => item.name).join('\n') || '-'}</p>
          </div>
      </Container>
  );
}

export default Item;