import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({product}) => {
    const {
        state: {cart}, 
        dispatch
    } = CartState();

  return (
    <div className='product'>
        <Card>
            <Card.Img variant='top' src={product.image} alt={product.name}/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle>
                    <span>₹ {product.price.split(".")[0]}</span>
                    {product.fastDelivery ? (
                        <div>Fast Delivery</div>
                    ) : (
                        <div>4 days delivery</div>
                    )}
                    <Rating rating={product.ratings}/>
                </Card.Subtitle>
                {
                    cart.some(c => c.id === product.id) ? (
                        <Button 
                            variant='danger'
                            onClick={() => 
                                dispatch({
                                    type: 'REMOVE_FROM_CART', 
                                    payload: product
                                })}>Remove from cart</Button>
                    ) : (
                        <Button 
                            variant='success' 
                            disabled={!product.inStock}
                            onClick={() => 
                                dispatch({
                                    type: 'ADD_TO_CART', 
                                    payload: product
                                })}>
                            {!product.inStock ? 'Out of stock' : 'Add to cart'}
                        </Button>
                    )
                }              
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct