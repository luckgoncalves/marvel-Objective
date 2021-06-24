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
    color: var(--smoke);
    cursor: pointer;
`;

export const Previous = styled(FiChevronLeft)`
    cursor: pointer;
    color: var(--smoke);
    margin-right: 8px;
`;

export const AllNext = styled(FiChevronsRight)`
    cursor: pointer;
    color: var(--smoke);
    margin-left: 8px;
`;


interface nextProps {
    onClick?: () => void;
}

export const Next = styled(FiChevronRight)<nextProps>`
    color: var(--smoke);
    cursor: pointer;
`;

interface numberPageProps {
    active?: boolean;
}

export const NumberPage = styled.button<numberPageProps>`
    width: 40px;
    height: 32px;
    cursor: pointer;

    background: var(--snow);
    border: 1px solid transparent;
    border-radius: 4px;

    margin-right: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--ligth-blue);
        color: var(--white);
    }

    ${props => props.active && css`
        background: var(--dark-blue);
        color: var(--white);
        border: 1px solid var(--dark-blue);
    `}
`;
