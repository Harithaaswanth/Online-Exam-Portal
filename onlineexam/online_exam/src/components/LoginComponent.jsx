// import { Box, Button, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginComponent = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('https://localhost:7274/api/Exam/login', {
//                 username: username,
//                 password: password
//             });
//             // Assuming the API returns a status code of 200 on successful login
//             if (response.status === 200) {
//                 const role = response.data.role;
//                 if (role === 'Admin') { navigate('/register'); }

//                 else { navigate('/register'); }
//             }
//         } catch (err) {
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 height: '100vh',
//                 textAlign: 'center',
//             }}


//         >

//             <Typography variant="h4" component="h1" gutterBottom> Login </Typography>
//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <div>
//                     <br />
//                     <TextField
//                         id="outlined-password-input"
//                         label="Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//             </div>
//             <br />
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <Button
//                 color="inherit"
//                 style={{ color: 'black', background: 'skyblue' }}
//                 onClick={handleLogin}
//             >
//                 Login
//             </Button>
//         </Box>
//     );
// };

// export default LoginComponent;
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:7274/api/Exam/login', {
                userid: 0,
                username: username,
                password: password,
                email: "",
                post: ""
            });
            if (response.status === 200) {
                const role = response.data.role;
                if (role === 'Admin') {
                    navigate('/question');
                } else {
                    navigate('/studentexam');
                }
            }
        } catch (err) {
            if (err.response) {
                console.error('Error response:', err.response);
                setError(err.response.data.message || 'Invalid username or password');
            } else if (err.request) {
                console.error('Error request:', err.request);
                setError('Server did not respond');
            } else {
                console.error('Error message:', err.message);
                setError('An unknown error occurred');
            }
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
            <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div>
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button
                color="inherit"
                style={{ color: 'black', background: 'skyblue' }}
                onClick={handleLogin}
            >
                Login
            </Button>
        </Box>
    );
};

export default LoginComponent;
