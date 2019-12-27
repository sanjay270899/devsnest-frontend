import React from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from '@material-ui/core/styles';
import Header from "./components/Header";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2196f3'
        }
    }
});

const  ClassShitApp: React.FC = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Header/>
        </MuiThemeProvider>
    );
};

export default ClassShitApp;
