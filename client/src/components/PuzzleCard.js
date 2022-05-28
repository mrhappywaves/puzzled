import React from 'react';
import { Card, Button } from 'react-bootstrap';


const PuzzledCard = () => {
    const puzzleInfo = [
        {image: 'https://www.collinsdictionary.com/images/full/kitten_101801980.jpg', title: '1', createdBy: 'John'},
        {image: 'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=800', title: '1', createdBy: 'John'},
        {image: 'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=800', title: '1', createdBy: 'John'},
        {image: 'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=800', title: '1', createdBy: 'John'},
        {image: 'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=800', title: '1', createdBy: 'John'},
    ];

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '15rem' }} key={index} className='box'>
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                    <Card.Text>{card.title}</Card.Text>
                    <Button variant="primary" to='/{card.puzzleId}'>Open Puzzle</Button>
                    <Card.Text>Created by:{card.createdBy}</Card.Text>
                </Card.Body>
                </Card>
        )
    }

    return (
        <div className='row col-12'>
            <div className='col-3'>
                {puzzleInfo.map(renderCard)}
            </div>
        </div>
    )

  
};

export default PuzzledCard;