import React from 'react';

import { Container } from './styles';

interface seriesProps {
    name: string
}


interface heroProps {
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

const Item: React.FC<heroProps> = ({thumbnail, name, series, events}) => {
    // console.log(series.items)
  return (
      <Container>
          <div className="info" >
              <img src={thumbnail.path.concat(`.${thumbnail.extension}`)} alt={name} />
              <span>{name}</span>
          </div>
          <div className="info">
              <p>{series.items.slice(0,3).map(item => item.name).join(', ')}</p>
          </div>
          <div className="info">
              <p>{events.items.slice(0,3).map(item => item.name).join(', ')}</p>
          </div>
      </Container>
  );
}

export default Item;