import React from 'react';
import Header from "./components/Header";
import Loader from './components/Loader';
import Dialog from './components/Dialog';
const  AppShell: React.FC = () => {
    return (
            <>
            <Header/>
            <Loader/>
            <Dialog/>
            </>
    );
};

export default AppShell;
