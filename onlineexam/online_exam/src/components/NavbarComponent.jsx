import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';

import React from 'react';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link to={'/login'}>
                        <Button color="inherit" style={{ color: "white" }}>Login</Button>
                    </Link>
                    <Link to={'/register'}><Button color="inherit" style={{ color: "white" }}>Registration</Button></Link>
                    <Link to={'/view'}><Button color="inherit" style={{ color: "white" }}>QuestionList</Button></Link>

                    <Link to={'/logout'}><Button color="inherit" style={{ color: "white" }}>Logout</Button></Link>
                    <Link to={'/studentanswer'}><Button color="inherit" style={{ color: "white" }}>Answer</Button></Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavbarComponent; // Ensure this line exists
