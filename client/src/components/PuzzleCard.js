import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PuzzledCard = () => {

    return (
        <Card style={{ width: '15rem' }} className='my-5'>
            <Card.Img variant="top" src='https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=800' />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Open Puzzle</Button>
                <Card.Footer>Created by:</Card.Footer>
            </Card.Body>
            </Card>
    )
};

export default PuzzledCard;