import React from 'react';
import {Redirect} from "react-router";
import {SessionConsumer} from "./session";


type Props = {
    children: React.ElementType,
    component: React.ElementType
};

const AuthenticatedRoutes: React.ElementType = ({children, component}: Props) => {
    const ChildComponent: React.ElementType = children || component;
    return (
        <SessionConsumer>
            {({session}) => {
                return session ? <ChildComponent/>: <Redirect to={{pathname: "/login"}}/>;
            }}
        </SessionConsumer>
    )
};

export default AuthenticatedRoutes;
