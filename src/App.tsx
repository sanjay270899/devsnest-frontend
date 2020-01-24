import React from 'react';
import './App.css';
import AppShell from "./app/index";
import Login from "./Login";
import {SessionProvider} from "./session/index";

const App: React.ElementType = () => {
  return (
      <>
        <AppShell/>
        <SessionProvider>
         <Login/>
        </SessionProvider>
        </>
)};

export default App;
