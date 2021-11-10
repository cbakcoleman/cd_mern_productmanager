import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ProductsViewOne = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setProduct(res.data.product);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [id]);

    return (
        <div>
            <h3>Product View</h3>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Favorite: {product.favorite ?  "&#9733;" : "&#9734;"}</p>
        </div>
    )
}

export default ProductsViewOne