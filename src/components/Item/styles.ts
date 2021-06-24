import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    cursor: pointer;
    
    max-width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--white);
    
    height: 88px;
    width: 100%;

    margin-top: 8px;
    
    border-radius: 4px;
    box-shadow: 0px 0px 5px var(--gray);
    &:hover{
        box-shadow: 0px 0px 5px #000000bd;
    }

    .info {
        width: 310px;

        font-family: 'PT Sans', sans-serif;
        font-weight: bold;
        font-size: 18px;

        padding: 20px 24px;

        display: flex;
        align-items: center;
        color: var(--dark-smoke);

        img {
            margin-right: 24px;
            width: 48px;
            height: 48px;

            border-radius: 4px;
        }
    }

    .info-series {
        p {
            font-weight: 400;
            font-size: 14px;

            width: 100%;
            white-space: pre-wrap;
            overflow: hidden;
            display: inline-block;
            text-overflow: ellipsis;
            margin: 0;
        }
    } 

    .info-eventos {
        p {
            font-weight: 400;
            font-size: 14px;

            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            display: inline-block;
            
            text-overflow: ellipsis;
            margin: 0;
        }
    }   

    @media(max-width: 500px) {
        .info-series {
            display: none;
        } 

        .info-eventos {
            display: none;
        }   
    }
`;
