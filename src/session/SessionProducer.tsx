import React from "react";
import {Provider } from './SessionContext';
type Props = {
    children: React.ElementType
};

export type UserCreds = {
    email: string,
    password: string
};
const login = (userCredentials: UserCreds): Promise<boolean| Error> => {
        return new Promise((resolve, reject) => {
            console.debug(userCredentials);
            return resolve(true);
        });
};
const  SessionProducer: React.ElementType = ({children}: Props) => {
    return (
        <Provider value={{
            'login': login
        }}>
            {children}
        </Provider>
        );
};

export default SessionProducer;
