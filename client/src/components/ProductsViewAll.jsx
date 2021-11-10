import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductsViewAll = (props) => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        getProductsFromDB();
    }, [])

    const getProductsFromDB = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data.products);
                setProducts(res.data.products);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>All Products</h3>
            {
                products.map( (product, i) => {
                    return (
                        <p key={product._id}>
                            <Link to={"/products/" + product._id}>
                                {product.isFavorited ? "&#9733;" : "&#9734;"} | 
                                Title: {product.title} | 
                                Price: {product.price} | 
                                Description: {product.description} 
                            </Link>
                        </p>
                    )
                })
            }
            
        </div>
    )
}

export default ProductsViewAll