import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { EmailSharp, VerifiedUserSharp, PasswordSharp, SecuritySharp, Visibility, VisibilityOff } from '@mui/icons-material';
import validate from './validation';
import { toast } from 'react-toastify';
import backendInfo from './BackendInfo';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
 
export default function Card({user, setUser}) {
  const [login, setLogin] = useState(true)
  const [error, setError] = useState({
    email: false, emailError: false,
    password: false, passwordError: false,
    username: false, usernameError: false,
    cpassword: false, cpasswordError: false
  })
 const [password, setPassword] = useState("");
 const [eye, setEye] = useState(false);

  const handleChange = (e)=>{
      const {name, value} = e.target;
      if(name === "password") setPassword(value)
      let message;
      if(name === "email" && value === ""){
        setError((prev)=>{
          return {
            ...prev,
            email: true, emailError: "Email is Required"
          }
        })
      }else if(name === "email" && value !== ""){
        setError((prev)=>{
          return {
            ...prev,
           email: false, emailError: false
          }
        })
      }
      else if(name === "cpassword"){
        message = validate[name](password, value)
        setError((prev)=>{
          return {...prev, ...message}
        })
      }
      
      if(name!=="email" && name !== "cpassword"){
       message = validate[name](value)
       setError((prev)=>{
        return {...prev, ...message}
      })
      }
      
  }

  const handleSignup = (data)=>{
    fetch(`${backendInfo.url}/signup`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json' 
      },
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
        if(data.success){
          localStorage.setItem("user", JSON.stringify(data.user));
          setUser(data.user)
          toast.success("Account created successfully! Please Login")
         }
         if(data.error){
          toast.error(data.error)
         }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let submitable = true;
    Object.values(error).forEach((err)=>{
      if(err !== false){
        submitable = false;
        return;
      }
    })
    if(submitable){
      const data = new FormData(event.currentTarget);
      let form = {
        email: data.get('email'),
        password: data.get('password'),
      };
      if(!login){
        form.username = data.get('username');
        console.log(form)
        handleSignup(form);
        return
      }
       fetch(`${backendInfo.url}/login`,  {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json' 
        }}
       )
      .then(async (res)=>{
        return await res.json()
      })
      .then((data)=>{
         if(data.success){
           localStorage.setItem("user", JSON.stringify(data.user));
           setUser(data.user)
           toast.success("Login Successfull")
         }
         if(data.error){
          toast.error(data.error)
         }
      })

    }else{
      toast.error("Fill all fields with valid value")
    }
   
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           {login? "Login" : "Sign Up"}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {!login && <><TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              InputProps={{
                startAdornment: (
                    <VerifiedUserSharp style={{color: "#1976d2", marginRight: "5px"}}/>
                )
              }}
              onChange={handleChange}
            />
              {error.username && error.usernameError && <p className="error">{error.usernameError}</p>}
              </>
            }
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                    <EmailSharp style={{color: "#1976d2", marginRight: "5px"}}/>
                )
              }}
              onChange={handleChange}
            />
            {error.email && error.emailError && <p className="error">{error.emailError}</p>}
             <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={eye? "text": "password"}
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                    <PasswordSharp style={{color: "#1976d2", marginRight: "5px"}}/>
                ),
                endAdornment: (
                  <div onClick={()=>setEye(!eye)} id='eye'>
                   {eye ? <Visibility style={{color: "#1976d2"}}/>: <VisibilityOff style={{color: "#1976d2"}}/>}
                  </div>
                )
              }}
              onChange={handleChange}
            />
              {error.password && error.passwordError && <p className="error">{error.passwordError}</p>}
            {!login && <><TextField
              margin="normal"
              required
              fullWidth
              name="cpassword"
              label="Confirm Password"
              type="password"
              id="cpassword"
              autoComplete="confirm-password"
              InputProps={{
                startAdornment: (
                    <SecuritySharp style={{color: "#1976d2", marginRight: "5px"}}/>
                )
              }}
              onChange={handleChange}
            />
              {error.cpassword && error.cpasswordError && <p className="error">{error.cpasswordError}</p>}
            </>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             {login? "Login" : "Sign Up"}
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={()=>setLogin(!login)}>
                {login? "Don't have an account? Sign Up" : "Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
