import { createContext, ReactNode } from 'react';

interface UserContextData {
  
    user: {
        name: string,
        decription: string,
    }
}

export const UserContext = createContext({} as UserContextData);

interface UserProviderProps {
    children: ReactNode,
    
    user: {
        name: string,
        decription: string,
    }
}


export function UserProvider({children, ...rest}:UserProviderProps) {

    const user = {
        name: 'Lucas Gonçalves',
        decription: 'Teste de Front-end',
    }
    
    return (
        <UserContext.Provider 
            value={{
                user
            }}
        >
            {children}
        </UserContext.Provider>

    )
}