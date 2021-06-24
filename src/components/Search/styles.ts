import styled from 'styled-components';

export const Container = styled.div`
  
  margin-top: 8px;
  margin-bottom: 40px;

  input {
    width: 295px;
    height: 32px;

    padding: 8px 16px;

    font-style: italic;
    font-size: 14px;

    color: #8E8E8E;

    background-color: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 4px;

    @media(max-width:500px) {
      width: 100%;
    }
  }
`;
