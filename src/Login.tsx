import React from 'react';
import {Button, withStyles} from "@material-ui/core";
import {Formik, Form} from "formik";
import {SessionConsumer} from "./session";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Redirect} from "react-router";
import {Grid} from "@material-ui/core";
import { TextField } from 'formik-material-ui';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const classes = {};

type Props = {};

const LoginForm: React.ElementType = (({login, loading, session, error}) => {

    if (session && session.token) {
        return <Redirect to={"/"}/>;
    }
    if(error){

    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Formik initialValues={{}} validate={(values) => {
        }
        } onSubmit={(values: any, actions: any) => {
            return login(values).then((r: boolean) => {
            }).catch((e: Error) => {
            })
        }}>
            <Form>
                <Paper elevation={3}>
                    <Box pt="3">
                <Typography variant="h3" align="center">
                   Login
                </Typography>
                <TextField type="email" name="email" variant="standard" label="email" color="primary" margin="normal" fullWidth/>
                <TextField type="password" name="password" variant="standard" label="password" color="primary" margin="normal" fullWidth/>
                <Box pt="3">
                {loading ?
                    <CircularProgress color="primary"/> :
                    <Button type="submit" color="primary" variant="contained" fullWidth>Login</Button>}
                </Box>
                    </Box>
                </Paper>
            </Form>
        </Formik>

        </Grid>
    )
});

const Login: React.FC = (props: Props) => {
    return (
        <SessionConsumer>
            {(props) => (<LoginForm {...props}/>)}
        </SessionConsumer>
    )
};

export default withStyles(classes)(Login);
