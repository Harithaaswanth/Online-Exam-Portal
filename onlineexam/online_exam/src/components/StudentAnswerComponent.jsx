import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of Navigate
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios';

function StudentAnswerComponent() {
    const [questionNames, setQuestionNames] = useState([]);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Use useNavigate hook for navigation

    useEffect(() => {
        fetchQuestionNames();
    }, []);

    const fetchQuestionNames = () => {
        axios.get('https://localhost:7274/api/Exam/Names')
            .then(response => {
                setQuestionNames(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    const handleChange = (id, value) => {
        setAnswers({
            ...answers,
            [id]: value
        });
    };

    const handleSubmit = () => {

        navigate('/studentanswer');
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom>Answer the Questions</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Question Name</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Your Answer</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {questionNames.map((name, index) => (
                            <TableRow key={index}>
                                <TableCell>{name}</TableCell>
                                <TableCell>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        multiline
                                        rows={2}
                                        value={answers[index] || ''}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: '20px' }}
            >
                Submit Answers
            </Button>
        </div>
    );
}

export default StudentAnswerComponent;
