import React from 'react'
import { CartState } from '../context/Context'
import FilterProduct from './FilterProduct';
import SingleProduct from './SingleProduct';

const ProductList = () => {
    const  { state: { products } } = CartState();

    console.log(products);

    return (
        <div className="home">
            <FilterProduct />
            <div className="productContainer">
                {products.map(product => {
                    return <SingleProduct product={product} key={product.id}/>
                })}
            </div>
        </div>
    )
}

export default ProductList