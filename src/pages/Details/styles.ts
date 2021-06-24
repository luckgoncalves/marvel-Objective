import styled from 'styled-components';

interface containerProps {
    bg: string;
}

export const Container = styled.div<containerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;


    min-height: 90vh;
    

    .bg-color {
        width: 1366px;
        max-width: 100%;

        padding-top: 48px;
        padding-bottom: 48px;

        padding-left: 20px;
        padding-right: 20px;

        background-color: #000000cf;
        width: 100%;
        height: 100%;

        .info {

            display: flex;
            align-items: center;
            justify-content: space-around;

            flex-wrap: wrap;

            @media(max-width: 500px) {
                flex-direction: column;
                text-align: center;

                img {
                    max-width: 100%;
                    margin-bottom: 24px;
                }
            }
        }
    }

    .image-personagem {
        border: 1px solid #fff;
        width: 400px;
    }
`;

export const Biografy = styled.div`
    width: 20rem;
    max-width: 100%;
    color: #fff;
    
    h1 {
        margin-bottom: 24px;
    }

    p {
        font-size: 18px;
    }
`;

export const Comics = styled.div`
    color: #fff;
    margin-top: 40px;
    max-height: 100vh;
`;


export const ListComics = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;

    margin-top: 24px;
    padding-bottom: 16px;

    /* width */
    &::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
     background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const Comic = styled.div`
    width: 318px;
    max-width: 100%;
    
    border-radius: 4px;

    background-color: #0000006e;
    border: 1px solid #fff;
    color: #fff;

    margin-right: 16px;

    padding: 16px;
    display: inline-table;
    flex-direction: column;
    
    text-align: center;

    h3 {
        margin-top: 24px;
        margin-bottom: 24px;

        height: 50px;
    }

    .description {
        height: 150px;
    }

`;

interface ComigThumbnailProps {
    bg: string;
}
export const ComigThumbnail = styled.div<ComigThumbnailProps>`
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    
    margin-top: 24px;
    height: 200px;
    width: 100%;
`;