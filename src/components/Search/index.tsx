import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

interface searchProps {
  onChange: (evt: string) => void;
}

const Search: React.FC<searchProps> = ({onChange}) => {
  return (
      <Container>
        <div className="input-icons">
          <input 
            onChange={evt => onChange(evt.target.value)}
            type="text" 
            placeholder="Search" 
            name="" 
            id=""/>
            <FiSearch className="icon-search"/>
        </div>
      </Container>
  );
}

export default Search;