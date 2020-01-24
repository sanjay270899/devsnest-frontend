import * as React from "react";
import {UserCreds} from "./SessionProducer";

export type SessionContextType = {
    login?: (userCredentials: UserCreds) =>  Promise<boolean| Error>
};
const defaultState= {};
const Context = React.createContext<SessionContextType>(defaultState);
const { Provider, Consumer} = Context;
export {Context, Provider, Consumer, defaultState};
