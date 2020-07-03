import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Axios from 'axios'
import {Redirect} from 'react-router-dom';

function LogIn() {
    const [userSignIn, setUserSignIn] = useState(
        { email: '', password: ''}
    );
    const [isLogin,setIsLogin] = useState(false)

    const handleChange = (event:any) => {
        setUserSignIn({...userSignIn, [event.target.name]: event.target.value})
    }
    const handleSignin =()=>{
        Axios.post('http://localhost:3000/api/auth/login',userSignIn)
        .then( (response)=> {
            console.log(response)
        })
        .catch((error)=> {
            console.log(error)
        })
        console.log(userSignIn)
    }
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        handleSignin()

    }
    if(isLogin){
        return <Redirect to="/task" />
      }
    return (
    <div>
        <Container  maxWidth="sm">
            
        <Typography component="h1" variant="h4" style={{textAlign:"center"}}>
            Login
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            defaultValue={userSignIn.email}
            onChange={handleChange}

          /> 
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue={userSignIn.password}
            onChange={handleChange}

          />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary">
            Log In
          </Button>

        </form>
        </Container>
        </div>
       
    )
}

export default LogIn
