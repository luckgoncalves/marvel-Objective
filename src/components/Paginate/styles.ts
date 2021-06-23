import styled, { css } from 'styled-components';

export const Container = styled.div`
  
`;


interface numberPageProps {
    active?: boolean;
}

export const NumberPage = styled.div<numberPageProps>`
    width: 40px;
    height: 32px;

    background: #F5F5F5;
    border: 1px solid #E5E5E5;

    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.active && css`
        background: #167ABC;
        border: 1px solid #167ABC;
    `}
`;
