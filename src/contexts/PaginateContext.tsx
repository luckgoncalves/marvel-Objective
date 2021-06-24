import { createContext, ReactNode, useState } from 'react';

interface PaginateContextData {
  total: number;
  limit: number;
  currentPage: number;

  handleCurrentPage: (e: number) => void;
  handleTotal: (e: number) => void;
  handleLimit: (e: number) => void;
}

export const PaginateContext = createContext({} as PaginateContextData);

interface PaginateProviderProps {
    children: ReactNode;

    total: number;
    limit: number;
    currentPage: number;
}


export function PaginateProvider({children, ...rest}:PaginateProviderProps) {
    const [ total, setTotal ] = useState(0);
    const [ limit, setLimit ] = useState(0);
    const [ currentPage, setCurrentPage ]   = useState(0);


    function handleCurrentPage(e:number) {
        setCurrentPage(e)
    }

    function handleLimit(e:number) {
        setLimit(e)
    }

    function handleTotal(e:number) {
        setTotal(e)
    }
 
    return (
        <PaginateContext.Provider 
            value={{
                total,
                limit,
                currentPage,
                handleCurrentPage,
                handleLimit,
                handleTotal
            }}
        >
            {children}
        </PaginateContext.Provider>

    )
}