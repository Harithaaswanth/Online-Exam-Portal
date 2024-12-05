
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
    const [username, setUusername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [post, setPost] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('https://localhost:7274/api/Exam/register', {
                username: username,
                password: password,
                email: email,
                post: post

            });
            // Assuming the API returns a status code of 200 on successful registration
            if (response.status === 200) {
                navigate('/login'); // Navigate to login page on successful registration
            }
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Registration
            </Typography>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    value={username}
                    onChange={(e) => setUusername(e.target.value)}
                />
                <br />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ mt: 2 }}
                />
                <br />

                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="PostID "
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                />



            </div>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button
                color="inherit"
                style={{ color: 'black', background: 'skyblue' }}
                onClick={handleRegister}
            >
                Register
            </Button>
        </Box>
    );
}

export default RegisterComponent;