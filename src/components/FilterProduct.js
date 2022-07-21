import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Rating from './Rating'

const FilterProduct = () => {
    
  const [rate, setRate] = useState(4);
  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check inline
                label="Ascending"
                name='group1'
                type='radio'
                id={`inline-1`}/>
        </span>
        <span>
            <Form.Check inline
                label="Descending"
                name='group1'
                type='radio'
                id={`inline-2`}/>
        </span>
        <span>
            <Form.Check inline
                label="Include out of stock"
                name='group1'
                type='checkbox'
                id={`inline-3`}/>
        </span>
        <span>
            <Form.Check inline
                label="Fast delivery only"
                name='group1'
                type='checkbox'
                id={`inline-4`}/>
        </span>
        <span>
            <label style={{paddingRight: 10}}>Rating: </label>
            <Rating 
                rating={rate} 
                style={{cursor: "pointer"}}
                onClick={(index) => setRate(index+1)} />
        </span>
        <Button variant="light">Clear Filters</Button>
    </div>
  )
}

export default FilterProduct