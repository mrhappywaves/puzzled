import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ADD_PUZZLE } from '../utils/mutations';
import { QUERY_ME, QUERY_PUZZLES } from '../utils/queries';
import Auth from '../utils/auth';

const PuzzleForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [puzzleState, setPuzzleState] = useState({
        title: '',
        img: '',
        difficulty: '',
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

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addPuzzle({
                variables: {
                    ...puzzleState,
                    author: Auth.getUser().data.username,
                }
            });

            setPuzzleState('');
        } catch (err) {
            console.error(err)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPuzzleState(value);
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         console.log(puzzleState, 'before click');
    //         await addPuzzle({ variables: { ...puzzleState } });
    //         console.log(puzzleState, 'after click');
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };



    return (
        <>
            <Button className='add-form-button' variant='primary' onClick={handleShow}>
                Add Puzzle
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Puzzle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='controlInput'>
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                type='text'
                                placehoder='puzzle name'
                                autoFocus
                                onChange={handleChange}
                                value={puzzleState.title}
                                className='form-input'
                            />
                        </Form.Group>
                        <Form.Label>Image Link:</Form.Label>
                        <Form.Group className='mb-3' controlId='controlInput'>
                            <Form.Control
                                as='textarea'
                                onChange={handleChange}
                                row={2}
                                value={puzzleState.img}
                                placehoder='URL'
                            />
                        </Form.Group>
                        <div>
                            <select name='Difficulty' onChange={handleChange} >
                                <option value='2x2'>2x2</option>
                                <option value='3x3'>3x3</option>
                                <option value='4x4'>4x4</option>
                                <option value='5x5'>5x5</option>
                            </select>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit' onClick={handleFormSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PuzzleForm;

