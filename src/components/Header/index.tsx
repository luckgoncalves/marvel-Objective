import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import logoObjective from '../../assets/logo.svg'

import { Container, Content } from './styles';

function Header() {

  const { user } = useContext(UserContext)
 
  const initial = user.name.split(' ') || [];
  
  let initials:any = [];
  
  initial.slice(0,2).map(i => i && initials.push(i.split('')[0]))
  
  return (
      <Container>
          <Content>
            <div className="logo" >
              <Link to="/">
                <img src={logoObjective} alt="Objective" />
              </Link>
            </div>
            <div className="user">
                <div>
                  <span className="name"> {user.name}</span>
                  <span className="description"> Teste de Front-end</span>
                </div>

                <div className="sigla">
                  <span>{initials.join('')}</span>
                </div>
            </div>
          </Content>
      </Container>
  );
}

export default Header;