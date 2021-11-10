import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';

const UpdateProduct = (props) => {
    let history = useHistory();

    // STATE VARIABLES FOR FORM INPUT
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [isFavorited, setIsFavorited] = useState();

    // GRAB ID VAR FROM URL
    const {id} = useParams();

    // GET REQ TO GRAB THIS ID's DATA FROM DB
    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log("************");
                console.log(res.data.product);
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
                setIsFavorited(res.data.product.isFavorited);
            })
            .catch()
    }, [])

    const updateSubmit = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/api/products/update/" + id, {title, price, description, isFavorited})
            .then( res => {
                console.log(res.data);
                history.push("/products/" + id)
            })
            .catch( err => console.log(err))
    }

    return (
        <div>
            <h3>Update Product</h3>
            {JSON.stringify(title)}
			{JSON.stringify(price)}
			{JSON.stringify(description)}
			{JSON.stringify(isFavorited)}

			<form onSubmit={updateSubmit}>
				<p>
					Title: <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
				</p>
				<p>
					Price: <input type="number" min="0.99" onChange={(e) => setPrice(e.target.value)} value={price} />
				</p>
				<p>
					Description: <textarea onChange={(e) => setDescription(e.target.value)} value={description} />
				</p>
				<p>
					<span>&#9733;</span>?: <input type="checkbox" onChange={(e) => setIsFavorited(e.target.checked)} checked={isFavorited} />
				</p>

				<button>Update</button>
			</form>
        </div>
    )
}

export default UpdateProduct