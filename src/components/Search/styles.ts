import styled from 'styled-components';

export const Container = styled.div`
  
  margin-top: 8px;
  margin-bottom: 40px;


  .input-icons svg {
    position: absolute;
    right: 0;
    
    top: 7px;
    margin-right: 10px;
  }

  .input-icons {
    position: relative;
    
    @media(min-width: 500px) {
      width: fit-content;
    }
  }


  input {
    width: 295px;
    height: 32px;

    padding: 8px 16px;

    font-style: italic;
    font-size: 14px;

    color: var(--smoke);

    background-color: var(--white);
    border: 1px solid var(--dark-snow);
    border-radius: 4px;

    @media(max-width:500px) {
      width: 100%;
    }
  }
`;
