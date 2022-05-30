import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Auth from '../utils/auth';


const Manage = () => {
    const [puzzleInfo, setPuzzleInfo] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get('/add-puzzle');
                setPuzzleInfo(data);
            } catch (err) {
                console.log(err);
            }
        }
        getData()
    }, []);
    console.log(puzzleInfo);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get('/manage', 
                {
                    headers: { Authorization: `Bearer ${Auth.getToken()}` }
                });
                setUserInfo(data)
            } catch (err) {
                console.log(err);
            };
        }
        getData()
    }, []);
    console.log(userInfo);

    return (
        <div>
            <div className='container'>
                <div>
                    <h2 className='text-center'>Manage Puzzles</h2>
                </div>


                <div className='container-fluid createdItems'>
                    {puzzleInfo.map(info => {
                        return (
                            <>
                              {
                                  info.owner.id = userInfo._id
                                  ?
                                  <div className='row'>
                                      <div className='col'>
                                          <Link 
                                            className='linkToPuzzle' 
                                            to={`/manage/${info._id}`}>
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Header as='h5' key={info.puzzle}>{info.puzzle}</Card.Header>
                                                    <Card.Img height={200} variant='top' alt={info.puzzle} src={info.img} />
                                                </Card>
                                            </Link>
                                      </div>
                                  </div>
                                  :
                                  <div></div>
                              }
                            </>
                        )
                    })}
                </div>

                <div className=''>
                    <Link to='/addpuzzle' className='btn btn-primary'>Add Puzzle</Link>
                </div>

            </div>       
        </div>
    )
};

export default Manage;