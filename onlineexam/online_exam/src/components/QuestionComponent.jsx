import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const QuestionComponent = () => {
    const [questionname, setQuestionname] = useState('');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleQuestion = async () => {
        try {
            const response = await axios.post('https://localhost:7274/api/Exam/AddQuestion', {
                questionname: questionname,
                answer: answer,


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
                AddQuestion
            </Typography>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    value={questionname}
                    onChange={(e) => setQuestionname(e.target.value)}
                />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Answer"

                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    sx={{ mt: 2 }}
                />
                <br />




            </div>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button
                color="inherit"
                style={{ color: 'black', background: 'skyblue' }}
                onClick={handleQuestion}
            >
                Add Question
            </Button>
        </Box>
    );
};

export default QuestionComponent
