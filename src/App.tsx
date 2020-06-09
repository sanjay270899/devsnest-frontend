import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AppShell from "./app/index";
import Login from "./Login";
import {SessionProvider} from "./session/index";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2196f3'
        }
    }
});


const App: React.ElementType = () => {
  return (
        <SessionProvider>
            <MuiThemeProvider theme={theme}>
            <Router>
            <Switch>
                <Route exact path={"/login"} component={AppShell}/>
                <AuthenticatedRoutes component={AppShell}/>
            </Switch>
            </Router>
            </MuiThemeProvider>
        </SessionProvider>
)};

export default App;
