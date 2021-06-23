import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    
    max-width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #FFF;
    
    height: 88px;
    width: 100%;

    margin-top: 8px;
    
    border-radius: 4px;
    box-shadow: 0px 0px 5px #00000033;

    .info {
        width: 310px;

        padding: 20px 24px;

        display: flex;
        align-items: center;
        color: #555555;

        img {
            margin-right: 24px;
            width: 48px;
            height: 48px;
        }
    }
`;
