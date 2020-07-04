import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';
function SignUp() {
    const [userSignUp, setUserSignUp] = useState(
        { username: '',name: '',email: '', password: '',  }
    );

    const [isSignUp,setIsSignUp] = useState(false)

    const handleSignup = ()=>{
        Axios.post('http://localhost:3000/api/auth/signup', userSignUp)
          .then( (response)=> {
              console.log(response)
              localStorage.setItem('Token', JSON.stringify(response.data.jwtToken));
              setIsSignUp(!isSignUp)
          })
          .catch((error)=> {
              console.log(error)
          })
          console.log(userSignUp)
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        handleSignup()
    }
    if(isSignUp){
      return <Redirect to="/task" />
    }
    const handleChange = (event:any) => {
      setUserSignUp({...userSignUp, [event.target.name]: event.target.value})
  }
    return (
    <div>
        <Container  maxWidth="sm">
            
        <Typography component="h1" variant="h4" style={{textAlign:"center"}}>
            SignUp
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            autoComplete="name"
            autoFocus
            defaultValue={userSignUp.name}
            onChange={handleChange}

          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            defaultValue={userSignUp.username}
            onChange={handleChange}
          /> 
           
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
            defaultValue={userSignUp.email}
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
            defaultValue={userSignUp.password}
            onChange={handleChange}

          />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
            Log In
          </Button>

        </form>
        </Container>
        </div>
       
    )
}

export default SignUp
