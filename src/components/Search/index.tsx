import React from 'react';

import { Container } from './styles';

interface searchProps {
  onChange: (evt: string) => void;
}

const Search: React.FC<searchProps> = ({onChange}) => {
  return (
      <Container>
          <input 
            onChange={evt => onChange(evt.target.value)}
            type="text" 
            placeholder="Search" 
            name="" 
            id=""/>
      </Container>
  );
}

export default Search;