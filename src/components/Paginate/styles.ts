import styled, { css } from 'styled-components';
import { FiChevronsLeft, FiChevronLeft, FiChevronsRight, FiChevronRight } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 26px 0px 32px;
`;

export const AllPrevious = styled(FiChevronsLeft)`
    margin-right: 8px;
    color: #8E8E8E;
    cursor: pointer;
`;

export const Previous = styled(FiChevronLeft)`
    cursor: pointer;
    color: #8E8E8E;
    margin-right: 8px;
`;

export const AllNext = styled(FiChevronsRight)`
    cursor: pointer;
    color: #8E8E8E;
    margin-left: 8px;
`;


interface nextProps {
    onClick?: () => void;
}

export const Next = styled(FiChevronRight)<nextProps>`
    color: #8E8E8E;
    cursor: pointer;
`;

interface numberPageProps {
    active?: boolean;
}

export const NumberPage = styled.button<numberPageProps>`
    width: 40px;
    height: 32px;
    cursor: pointer;

    background: #F5F5F5;
    border: 1px solid transparent;
    border-radius: 4px;

    margin-right: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #5DAFFF;
        color: #FFF;
    }

    ${props => props.active && css`
        background: #167ABC;
        color: #fff;
        border: 1px solid #167ABC;
    `}
`;
