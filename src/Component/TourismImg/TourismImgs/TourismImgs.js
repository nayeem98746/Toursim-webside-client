import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TourismImgs = (props) => {
    const { id, Name, img1, img2,img3, img4, img5}= props.img
    return (
        <div>
           <Card className="service" style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{Name}</Card.Title>
    <Card.Img variant="top" src={img1} />
    <Card.Img variant="top" src={img2} />
    <Card.Img variant="top" src={img3} />
    <Card.Img variant="top" src={img4} />
    <br /><br />

    
    <Link to={`/tourismImg/${id}`}><Button variant="warning">Go to Where {Name.toLowerCase()} </Button></Link>
   
  </Card.Body>
</Card>
        </div>
    );
};

export default TourismImgs;