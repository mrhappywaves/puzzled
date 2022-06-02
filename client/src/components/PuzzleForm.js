import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BsFillPuzzleFill } from "react-icons/bs";
import { ADD_PUZZLE } from '../utils/mutations';
import { QUERY_PUZZLES, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const PuzzleForm = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [puzzleState, setPuzzleState] = useState({
        title: '',
        img: '',
        difficulty: ''
    });

    const [addPuzzle] = useMutation(ADD_PUZZLE, {
        update(cache, { data: { addPuzzle } }) {
            try {
                const { puzzles } = cache.readQuery({ query: QUERY_PUZZLES });

                cache.writeQuery({
                    query: QUERY_PUZZLES,
                    data: { puzzles: [addPuzzle, ...puzzles] },
                });
            } catch (e) {
                console.error(e);
            }

            const { me } = cache.readQuery({ query: QUERY_ME });
            
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, puzzles: [...me.puzzles, addPuzzle] } },
            });
        },
    });

    // const [addPuzzle] = useMutation(ADD_PUZZLE); 

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addPuzzle({
                variables: {
                    img: puzzleState.img,
                    title: puzzleState.title,
                    difficulty: puzzleState.difficulty,
                    author: Auth.getUser().data._id,
                },
            });
            console.log(data);
            setPuzzleState({
                title: '',
                img: '',
                difficulty: '',
            });
        } catch (err) {
            console.error(err)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setPuzzleState({
            ...puzzleState,
            [name]: value,
        });

        console.log(Auth.getUser().data.username);
        console.log(puzzleState.img);
    };

    return (
        <>
            <Button className='add-form-button mb-5' variant='primary' onClick={handleShow}>
                <BsFillPuzzleFill />
                Add Puzzle
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Puzzle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Label>Image Link:</Form.Label>
                        <Form.Group className='mb-3' controlId='controlInput'>
                            <Form.Control
                                name="img"
                                type='img'
                                placehoder='Image URL'
                                onChange={handleChange}
                                value={puzzleState.img}
                                row={2}
                                as="textarea"
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='controlInput'>
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                name="title"
                                type='title'
                                placehoder='Title'
                                onChange={handleChange}
                                value={puzzleState.title}
                                className='form-input'
                            />
                        </Form.Group>
                        <div>
                            <select name='difficulty' type='difficulty' value={puzzleState.difficulty} onChange={handleChange} >
                                <option value='2'>2x2</option>
                                <option value='3'>3x3</option>
                                <option value='4'>4x4</option>
                                <option value='5'>5x5</option>
                            </select>
                        </div>
                        <hr></hr>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PuzzleForm;

