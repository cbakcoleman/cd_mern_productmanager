import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const ProductsViewOne = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data.product);
            })
            .catch(err => console.log(err))
    }, [id]);

    return (
        <div>
            <h3>Product View</h3>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Favorite: {product.favorite ?  <span>&#9733;</span> : <span>&#9734;</span>}</p>
            <p>
                <Link to={"/products/update/" + product._id}>Update Product</Link>
            </p>
            <p>
                <Link to={"/products/delete/" + product._id}>Delete Product</Link>
            </p>
        </div>
    )
}

export default ProductsViewOne