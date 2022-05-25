import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PuzzledCard = () => {

    return (
        <Card style={{ width: '15rem' }} className='my-5'>
            <Card.Img variant="top" src='https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=800' />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
    )
};

export default PuzzledCard;