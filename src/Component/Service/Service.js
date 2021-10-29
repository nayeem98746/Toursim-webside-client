import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Service.css"

const Service = (props) => {
    const {id, name, img, price, description}= props.service
    return (
        <div>


<Card className="service" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="warning">Go somewhere</Button>
  </Card.Body>
</Card>

        </div>
    );
};

export default Service;

