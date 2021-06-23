import React from 'react';
import logoObjective from '../../assets/logo.svg'

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
      <Container>
          <Content>
            <div>
                <img src={logoObjective} alt="Objective" />
            </div>
            <div>
                <span> Lucas Gonçalves</span>
                <span> Teste de Front-end</span>
            </div>
          </Content>
      </Container>
  );
}

export default Header;