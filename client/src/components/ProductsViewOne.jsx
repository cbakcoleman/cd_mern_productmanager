import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import {useHistory} from 'react-router';

const ProductsViewOne = (props) => {
    let history = useHistory();

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

    const deleteProduct = (deleteId) => {
        console.log(product._id)
        axios.delete("http://localhost:8000/api/products/delete/" + deleteId)
            .then(res => {
                console.log(res.data);
                console.log("Successfully deleted " + deleteId);
                history.push("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>Product View</h3>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Favorite: {product.isFavorited ?  <span>&#9733;</span> : <span>&#9734;</span>}</p>
            <p>
                <Link to={"/products/update/" + product._id}>Update Product</Link>
            </p>
            <p>
                <button onClick={ ()=> deleteProduct(product._id)}>Delete Product</button>
            </p>
        </div>
    )
}

export default ProductsViewOne