import React, {useState} from "react";
import {Provider} from './SessionContext';
type Props = {
    children: React.ElementType
};

export type SessionDetails = {
    token: string,
    canViewAttendance? : boolean
};

export type LoginParams = {
    email: string,
    password: string
};

const usePersistedSession = (): SessionDetails| null => {
    const token = localStorage.getItem('token');
    if(!token){
        return null;
    }
    return {
        token
    };
};

const  SessionProvider: React.ElementType = ({children}: Props) => {

    const [loading, isLoading] = useState(false);
    const login = (userCredentials: LoginParams): Promise<boolean| Error> => {
        isLoading(true);
        return new Promise((resolve, reject) => {
            localStorage.setItem('token','xyz');
            localStorage.setItem('email',userCredentials.email);
            isLoading(false);
            return resolve(true);
        });
    };

    const session = usePersistedSession();

    return (
      <Provider value={{
            'login': login,
            'session': session,
            'loading': loading,
        }}>
            {children}
        </Provider>
        );
};

export default SessionProvider;
