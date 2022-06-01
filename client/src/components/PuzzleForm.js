import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ADD_PUZZLE } from '../utils/mutations';

const AddPuzle = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [puzzleState, setPuzzleState] = useState({
        title: '',
        img: '',
        difficulty: '',
    });

    const [addPuzzle] = useMutation(ADD_PUZZLE);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPuzzleState({
            ...puzzleState,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(puzzleState, 'before click');
            await addPuzzle({ variables: { ...puzzleState } });
            console.log(puzzleState, 'after click');
        } catch (err) {
            console.error(err);
        }
    };



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
                                value={setPuzzleState.title}
                            />
                        </Form.Group>
                        <Form.Label>Image Link:</Form.Label>
                        <Form.Group className='mb-3' controlId='controlInput'>
                            <Form.Control
                                as='textarea'
                                onChange={handleChange}
                                row={2}
                                value={setPuzzleState.img}
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
                    <Button onclick={handleSubmit} type='submit'>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddPuzle;

