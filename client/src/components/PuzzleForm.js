// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { useMutation } from '@apollo/client';
// import { ADD_PUZZLE } from '../utils/mutations';
// import { BsFillPuzzleFill } from "react-icons/bs";

// const AddPuzzleForm = () => {

//     const [puzzleData, setPuzzleData] = useState({
//         title: '',
//         img: '',
//         difficulty: '',
//     });

//     const [addPuzzle] = useMutation(ADD_PUZZLE);
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const data = await addPuzzle({
//                 variables: { puzzleData },
//             });
//             setPuzzleData('');
//         } catch (err) {
//             console.error(err);
//         }
//     };
//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setPuzzleData({
//             ...puzzleData,
//             [name]: value,
//         });
//     };

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Form.Group className='mb-3'>
//                 <Form.Control
//                     type='text'
//                     placeholder='Please paste image URL here'
//                     name='puzzle'
//                     onChange={handleChange}
//                     value={puzzleData.img}
//                 />
//             </Form.Group>
//             <Form.Group className='mb-3'>
//                 <Form.Control
//                     type='text'
//                     placeholder='Please enter puzzle name'
//                     name='puzzle'
//                     onChange={handleChange}
//                     value={puzzleData.title}
//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Control
//                     as='select'
//                     value={puzzleData.difficulty}
//                     name='type'
//                     onChange={handleChange}
//                 >
//                     <option value={3} selected default hidden>
//                         Difficulty
//                     </option>
//                     <option value={2}>2x2</option>
//                     <option value={3}>3x3</option>
//                     <option value={4}>4x4</option>
//                     <option value={5}>5x5</option>
//                 </Form.Control>
//             </Form.Group>
//             <br />
//             <Button variant='warning' type='submit' block><BsFillPuzzleFill />Save</Button>
//         </Form>
//     )
// }

// export default AddPuzzleForm;