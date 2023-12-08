import React from 'react';
import { Avatar, Box, Typography, Divider } from '@mui/material';
import {Button} from '@mui/material';

const Details = ({ user }) => {

    const handleLogout= (e)=>{

    }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Avatar alt={user.usernamename} sx={{ width: 100, height: 100, my: 3 }} />
      <Typography variant="h5">{user.username}</Typography>
      <Typography variant="subtitle1">{user.email}</Typography>
      <Divider sx={{ width: '100%', my: 3 }} />
      <Button variant="contained" color="primary" onClick={handleLogout}>
      Logout
    </Button>
    </Box>
  );
};

export default Details;
