import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ViewQuestionComponent() {
    const [Quesdetail, setQuesdetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [editQuestion, setEditQuestion] = useState('');
    const [editAnswer, setEditAnswer] = useState('');

    const fetchTasks = () => {
        setLoading(true);
        axios.get('https://localhost:7274/api/Exam')
            .then(response => {
                setQuesdetail(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleDeleteTask = (id) => {
        axios.delete(`https://localhost:7274/api/Exam/${id}`)
            .then(() => {
                fetchTasks(); // Refresh the task list
            })
            .catch(error => setError(error.message));
    };

    const handleEditClick = (id, question, answer) => {
        setEditingId(id);
        setEditQuestion(question);
        setEditAnswer(answer);
    };

    const handleEditChange = (e, field) => {
        if (field === 'question') {
            setEditQuestion(e.target.value);
        } else if (field === 'answer') {
            setEditAnswer(e.target.value);
        }
    };

    const handleEditSubmit = (id) => {
        axios.put(`https://localhost:7274/api/Exam/${id}`, {
            questionname: editQuestion,
            answer: editAnswer
        })
            .then(() => {
                setEditingId(null);
                fetchTasks(); // Refresh the task list
            })
            .catch(error => setError(error.message));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom> Question View </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Question ID</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Question</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Answer</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Edit</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Quesdetail.map(Quesdetail => (
                            <TableRow key={Quesdetail.questionid}>
                                <TableCell>{Quesdetail.questionid}</TableCell>
                                <TableCell>
                                    {editingId === Quesdetail.questionid ? (
                                        <TextField
                                            value={editQuestion}
                                            onChange={(e) => handleEditChange(e, 'question')}
                                        />
                                    ) : (
                                        Quesdetail.questionname
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editingId === Quesdetail.questionid ? (
                                        <TextField
                                            value={editAnswer}
                                            onChange={(e) => handleEditChange(e, 'answer')}
                                        />
                                    ) : (
                                        Quesdetail.answer
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editingId === Quesdetail.questionid ? (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handleEditSubmit(Quesdetail.questionid)}
                                        >
                                            Save
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handleEditClick(Quesdetail.questionid, Quesdetail.questionname, Quesdetail.answer)}
                                        >
                                            Edit
                                        </Button>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDeleteTask(Quesdetail.questionid)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ViewQuestionComponent;
