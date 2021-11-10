import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const NewProduct = () => {
	// FOR USEHISTORY
	let history = useHistory();

	// STATE VARIABLES FOR FORM INPUT
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [isFavorited, setIsFavorited] = useState();

	// FORM ONSUBMIT FUNCTION
	const formSubmit = (e) => {
		e.preventDefault();

		axios.post("http://localhost:8000/api/products/new", { title, price, description, isFavorited })
			.then(res => {
				console.log(res.data);
				console.log("Form Submitted: " + title, price, description, isFavorited);
				history.push("/");
			})
			.catch(err => console.log(err))


		setTitle("");
		setPrice(0);
		setDescription("");
		setIsFavorited();
	}

	return (
		<div>
			<h3>Create a New Product:</h3>
			{JSON.stringify(title)}
			{JSON.stringify(price)}
			{JSON.stringify(description)}
			{JSON.stringify(isFavorited)}

			<form onSubmit={formSubmit}>
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

				<button>Create</button>
			</form>

		</div>
	)
}
export default NewProduct