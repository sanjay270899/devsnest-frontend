import * as React from "react";
import {LoginParams} from "./SessionProvider";

export type SessionContextType = {
    login?: (userCredentials: LoginParams) =>  Promise<boolean| Error>
    session: Object| null,
    loading: boolean,
};


const defaultState= {
    session: null,
    loading: false
};

const Context = React.createContext<SessionContextType>(defaultState);
const { Provider, Consumer} = Context;
export {Context, Provider, Consumer, defaultState};
