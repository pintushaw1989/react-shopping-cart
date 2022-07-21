import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Navbar, Container, FormControl, Dropdown, Nav, Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
    const {
        state: {cart},
        dispatch
    } = CartState();

    console.log(cart);

  return (
    <Navbar bg="dark" variant="dark" style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl 
                    style={{width: 500}} 
                    placeholder="Please search for a product" 
                    className='m-auto' />
            </Navbar.Text>
            <Nav>
                <Dropdown align='end'>
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth: 370}}>
                        {
                            cart.length > 0 ? (
                                <>
                                    {cart.map(product => (
                                        <span className='cartItem'>
                                            <img 
                                                src={product.image} 
                                                className="cartItemImage"
                                                alt={product.name}/>
                                            <div className='cartItemDetails'>
                                                <span>{product.name}</span>
                                                <span>₹ {product.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete 
                                                style={{cursor: 'pointer'}}
                                                onClick={() => 
                                                    dispatch({
                                                        type: 'REMOVE_FROM_CART', 
                                                        payload: product
                                                    })}
                                                fontSize='20px'/>
                                        </span>
                                    ))}
                                    <Link to="/cart">
                                        <Button style={{width: "95%", margin: "0 10px"}}>
                                            Go To Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{padding: 10}}>Cart is empty!</span>
                            )
                        }
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header