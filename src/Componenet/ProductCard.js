import React from 'react'
import { Card, Button } from "react-bootstrap"

const ProductCard = (props) => {
   const handleName = (mark) => alert(`the product mark is ${props.mark}`) 
return(

    <div>
<Card style={{ width: '18rem' }}>
    {props.children}
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text> {props.price} </Card.Text>
    <Card.Text> {props.mark}  </Card.Text>
    <Button variant="primary" onClick={handleName}>click me </Button>
  </Card.Body>
</Card>
    </div>

    )
}
export default ProductCard