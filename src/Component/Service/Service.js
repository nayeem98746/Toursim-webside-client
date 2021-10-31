import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
    const { _id, name, img, price, description}= props.service
    return (
        <div>


<Card className="service" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Link to={`/booking/${_id}`}><Button variant="warning">Go to Where {name.toLowerCase()} </Button></Link>
    <Link to="/bookinginformation">
    <Button className="m-4">Tap to Booking  </Button>
    </Link>
  </Card.Body>
</Card>

        </div>
    );
};

export default Service;

