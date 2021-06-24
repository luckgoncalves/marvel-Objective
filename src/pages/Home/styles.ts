import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  padding-left: 20px;
  padding-right: 20px;

  background-color: var(--dark-snow);

  padding-top: 40px;
  height: 100%;
  margin-bottom: 24px;
  
  .header{
    width: 100%;
    margin-bottom: 24px;

    h1 {
      color: var(--dark-smoke);
      font-style: 32px;
      font-weight: bold;

      margin-bottom: 16px;

      @media(max-width: 500px) {
        text-align: center;
      }
    }
    
    .search{ 
      label {
        font-weight: bold;
        font-style: 16px;
        color: var(--dark-smoke);
      }
    }
  }

  @media(max-width: 500px) {
    .header {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;

      .search {
        margin-top: 24px;
        text-align: center;
        width: 100%;
      }
    }
  }

`;

export const ListHeader = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--dark-smoke);
  
  .info-header {
    padding: 8px 24px 0px;
    font-size: 12px;
    width: 310px;
    letter-spacing: 0px;
    
    font-weight: 400;
  }

  @media(max-width: 500px) {
    .info-header-series, .info-header-eventos{ 
      display: none;
    }
  }
`;