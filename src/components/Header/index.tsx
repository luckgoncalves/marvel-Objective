import React from 'react';
import { Link } from 'react-router-dom';
import logoObjective from '../../assets/logo.svg'

import { Container, Content } from './styles';

const Header: React.FC = () => {
  
  return (
      <Container>
          <Content>
            <div className="logo" >
              <Link to="/">
                <img src={logoObjective} alt="Objective" />
              </Link>
            </div>
            <div className="user">
                <span className="name"> Lucas Gonçalves</span>
                <span className="description"> Teste de Front-end</span>
            </div>
          </Content>
      </Container>
  );
}

export default Header;