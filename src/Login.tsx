import  React from 'react';
import  {Button, withStyles} from "@material-ui/core";
import { Formik, Form, Field} from "formik";
import {SessionConsumer} from "./session";

const classes = {};

type Props = {};

const LoginForm: React.ElementType = (({login}) => (
    <Formik initialValues={{}} validate={(values) => {
    }
    } onSubmit={ (values: any, actions: any) => {
        return login(values).then((r: boolean) => {
        }).catch((e: Error) => {
        })
    }}>
        <Form>
            <Field type="email" name="email"/>
            <Field type="password" name="password"/>
            <Button type={"submit"}>Login</Button>
        </Form>
    </Formik>
));

const  Login: React.FC = (props: Props) => {

  return (
      <SessionConsumer>
          {(props) => (<LoginForm {...props}/>)}
      </SessionConsumer>
  )
};

export default withStyles(classes)(Login);
