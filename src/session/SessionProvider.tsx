import React, {useState} from "react";
import {Provider} from './SessionContext';
import {LOGIN_URL} from "./constants";
import axios from 'axios';

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
let error: null|string = null;

const  SessionProvider: React.ElementType = ({children}: Props) => {
    const [loading, isLoading] = useState(false);
    const login = (userCredentials: LoginParams): Promise<boolean| Error> => {
        isLoading(true);
        return new Promise((resolve, reject) => {
            axios.post(LOGIN_URL,{
                username: userCredentials.email,
                password: userCredentials.password
            }
            ).then(response => {
                const loginResponse = response.data;
                if(loginResponse && loginResponse.token){
                    localStorage.setItem('token',loginResponse.token);
                    error = null;
                    isLoading(false)
                } else{
                    error = "Something went wrong";
                    isLoading(false);
                }
            }).catch(e => {
                console.log(e);
                error = "Something went wrong";
                isLoading(false);
            })
        });
    };

    const session = usePersistedSession();

    return (
      <Provider value={{
            'login': login,
            'session': session,
            'loading': loading,
            'error': error
        }}>
            {children}
        </Provider>
        );
};

export default SessionProvider;
