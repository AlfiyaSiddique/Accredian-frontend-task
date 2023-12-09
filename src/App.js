import React, {useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "./Card.js";
import { Container } from "@mui/material";
import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Details from "./Details.js";


// eslint-disable-next-line no-unused-vars
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [user, setUser]  = useState(null)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
     setUser(user)
    }
  }, [setUser])
  return (
    <Container maxWidth="sm">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {user? <Details user={user} setUser={setUser}/>:<Card user={user} setUser={setUser}/>}
    </Container>
  );
}
