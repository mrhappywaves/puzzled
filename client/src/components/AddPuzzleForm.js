import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ImageUploadField } from './ImageUploadField';
import { useMutation } from '@apollo/client';
import { ADD_PUZZLE } from '../utils/mutations';


const AddPuzzleForm = () => {
    
    const [puzzleData, setPuzzleData] = useState({
        title: '',
        image: '',
        difficulty: '',
    });

    const [ addPuzzle, { error } ] = useMutation(ADD_PUZZLE);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await addPuzzle({
                variables: { puzzleData },
            });
            setPuzzleData('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPuzzleData({
            ...puzzleData,
            [name]: value,
        });
    };

    
 

    const handleImageUrl = (url) => {
        setPuzzleData({ ...puzzleData, image: url })
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Control
                  type='text'
                  placeholder='Puzzle name'
                  name='puzzle'
                  onChange={handleChange}
                  value={puzzleData.puzzle}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                  as='select'
                  value={puzzleData.tyoe}
                  name='type'
                  onChange={handleChange}
                >
                <option>- Difficulty -</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>    
                </Form.Control>
            </Form.Group>

            <br />

            <ImageUploadField 
              value={puzzleData.image}
              name='image'
              handleImageUrl={handleImageUrl}
            />

            <Button variant='warning' type='submit' block>Submit</Button>
        </Form>
    )
}

export default AddPuzzleForm;